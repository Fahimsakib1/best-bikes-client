import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';





const ProductBookingModal = ({ bikeInfoDetails, setBikeInfoDetails }) => {
    const { user } = useContext(AuthContext);

    const { category_name, img, product_name, location, original_price, resale_price, years_of_use, posted_date, milage, condition, seller_name, brand_logo, category_id, email, _id } = bikeInfoDetails


    //code for getting the review date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const MonthDateYear = [month, day, year].join('-');
    const bookingDate = MonthDateYear + ' ' + currentTime


    const closeModal = () => {
        setBikeInfoDetails(null)
    }


    const { data: categories = [], refetch } = useQuery({
        queryKey: ['category', category_id],
        queryFn: () => fetch(`https://best-bikes-server.vercel.app/category/${category_id}`)
            .then(res => res.json())
    })





    const handleProductBooking = (event) => {

        event.preventDefault()
        const name = user?.displayName;
        const email = user?.email;
        const productName = product_name;
        const mobile = event.target.phone.value;
        const location = event.target.location.value;
        const currency = event.target.currency.value;
        const postCode = event.target.postCode.value;

        console.log(name, email, productName, mobile, location, currency, postCode);
        event.target.reset();

        const bookingInfo = {
            productName: product_name,
            companyName: category_name,
            price: resale_price,
            //currency:currency,
            //postCode:postCode,
            sellerName: seller_name,
            sellerEmail: bikeInfoDetails.email,
            buyerName: user?.displayName,
            buyerEmail: user?.email,
            buyerMobile: mobile,
            buyerLocation: location,
            productCategoryID: category_id,
            bookingDate: bookingDate,
            productImage: bikeInfoDetails.img,
            productID: _id,
        }

        fetch('https://best-bikes-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(bookingInfo)
        })

            .then(res => res.json())
            .then(bookingData => {
                if (bookingData.acknowledged) {
                    toast.success(`Congratulations!! ${user?.displayName} You have Booked ${product_name}`);
                    setBikeInfoDetails(null);
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: `${bookingData.message}`,
                        text: 'Already Booked.. Try To Book Other Bike'
                    })
                }
            })


        fetch(`https://best-bikes-server.vercel.app/bookedProducts/${_id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success(`Visit My Orders Page to see your bookings`);
                    refetch();
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong',
                        text: 'Can not Proceed Booking'
                    })
                }
            })

    }






    return (
        <div>
            <input type="checkbox" id="product-booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={closeModal} htmlFor="product-booking" className="btn btn-sm btn-circle absolute right-2 top-2">???</label>
                    <div className='flex justify-center items-center gap-x-4'>
                        <h3 className="text-lg font-bold text-blue-800 ">Booking For: {product_name}</h3>
                        <div className="avatar mb-3">
                            <div className="w-16 rounded-md">
                                <img src={img} alt='' />
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleProductBooking}>

                        <input defaultValue={`Name: ${user?.displayName}`}
                            disabled
                            type="text" name='userName' placeholder="User Name" className="input input-bordered w-full my-2 font-semibold dark:text-black" required
                        />

                        <input defaultValue={`Email: ${user?.email}`}
                            disabled
                            type="email" name='email' placeholder="Email Address" className="input input-bordered w-full my-2 font-semibold dark:text-black" required
                        />

                        <div className='flex justify-evenly items-center gap-x-4'>
                            <input defaultValue={`${category_name} ${product_name}`}
                                disabled type="text" name='productName' placeholder="Product Name" className="input input-bordered font-semibold w-full my-2 dark:text-black"
                            />

                            <input defaultValue={ `Price: ${resale_price} Taka`}
                                disabled type="text" name='productName' placeholder="Product Name" className="input input-bordered font-semibold w-full my-2 dark:text-black"
                            />
                        </div>

                        <div className='flex justify-evenly items-center gap-x-4'>
                            <input type="text" name='phone' placeholder="Mobile" className="input input-bordered w-full my-2 dark:text-black" required />

                            <input type="text" name='location' placeholder="Location" className="input input-bordered w-full my-2 dark:text-black" required />
                        </div> 

                        <div className=' flex justify-evenly items-center gap-x-4'>
                            <input type="text" name='postCode' placeholder="Post Code" className="input input-bordered w-1/2 my-2 dark:text-black" required />

                            <select defaultValue="BDT" 
                            name='currency'
                            className="select select-bordered w-1/2">
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                            </select>

                        </div>

                        <input type="submit" value="Submit" className='w-full bg-green-700 text-white text-xl py-2 rounded-md mt-4 mb-2'
                        />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProductBookingModal;