import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ProductBookingModal = ({ bikeInfoDetails, setBikeInfoDetails }) => {
    const { user } = useContext(AuthContext);

    const { category_name, img, product_name, location, original_price, resale_price, years_of_use, posted_date, milage, condition, seller_name, brand_logo, category_id } = bikeInfoDetails

    // On clicking the Book now button, a form in a modal will popup with the logged-in user name and email address, item name, and price(item name, price, and user information will not be editable) by default. You will give your phone number and meeting location, and lastly, there will be a submit button. After clicking the submit button, you will have to inform the buyer with a modal/toast that the item is booked.

    const handleProductBooking = (event) => {
        event.preventDefault()
        const name = user?.displayName;
        const email = user?.email;
        const productName = product_name;
        const mobile = event.target.phone.value;
        const location = event.target.location.value;

        console.log(name, email, productName, mobile, location);
        event.target.reset();
        setBikeInfoDetails(null);

    }

    return (
        <div>
            <input type="checkbox" id="product-booking" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-booking" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='flex justify-center items-center gap-x-4'>
                        <h3 className="text-lg font-bold text-blue-800">Booking For: {product_name}</h3>
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={img} alt='' />
                            </div>
                        </div>
                    </div>


                    <form onSubmit={handleProductBooking}>

                        <input defaultValue={user?.displayName}
                            disabled
                            type="text" name='userName' placeholder="User Name" className="input input-bordered w-full my-3 font-semibold " required
                        />

                        <input defaultValue={user?.email}
                            disabled
                            type="email" name='email' placeholder="Email Address" className="input input-bordered w-full my-3 font-semibold " required
                        />

                        <input defaultValue={product_name}
                            disabled type="text" name='productName' placeholder="Product Name" className="input input-bordered font-semibold w-full my-3 "
                        />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full my-3 " />

                        <input type="text" name='location' placeholder="Meeting Location" className="input input-bordered w-full my-3 " />

                        <input type="submit" value="Submit" className='w-full bg-gray-800 text-white text-xl py-2 rounded-md mt-4 mb-2 '
                        />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default ProductBookingModal;