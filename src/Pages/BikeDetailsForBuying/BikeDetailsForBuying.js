import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { json, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const BikeDetailsForBuying = () => {

    const bikeDetails = useLoaderData();
    const { _id, product_name, category_name, mobile, location, original_price, img, resale_price, seller_name, email } = bikeDetails;

    const { user } = useContext(AuthContext);

    const handleConfirmPayment = (event) => {
        event.preventDefault();

        const buyerEmail = user?.email || 'Unregistered Buyer Email';
        const buyerPhone = event.target.phone.value;
        const buyerName = user?.displayName || 'Unregistered Buyer Name';
        const currency = event.target.currency.value;
        const postCode = event.target.postCode.value;
        const buyerLocation = event.target.location.value;

        //console.log(buyerName, buyerEmail, currency, buyerPhone, postCode, buyerLocation);

        const orders = {
            buyerName: buyerName,
            buyerEmail: buyerEmail,
            buyerPhone: buyerPhone,
            currency: currency,
            postCode: postCode,
            buyerLocation: buyerLocation,
            bikeID: _id,
            //bikePrice: resale_price,
            sellerName: seller_name,
            sellerEmail: email,
            bikeModel:product_name,
            bikeCompany: category_name,
            bikeImage: img,
        }

        console.log(orders);

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
        .then(res => res.json())
        .then(data => {
            console.log("URL:", data.url);
            //window.location.replace(data.url);
            
            if(data.url){
                window.location.replace(data.url)
            }
            else{
                toast.error("Can not get the URL.. Something Wrong Happened")
            }
        })
        

    }






    return (
        <div>

            <div className='flex justify-center items-center gap-x-8 lg:flex-row md:flex-col sm:flex-col flex-col mt-8 md:gap-y-10 sm:gap-y-8 gap-y-8'>

                <div className='lg:w-1/2 md:w-full sm:w-full w-full lg:mb-0 mb-10'>
                    <div className=' mx-auto mt-4 lg:px-0 md:px-6 sm:px-4 px-4'>
                        <figure><img src={img} alt="" className='rounded-md md:w-3/4 lg:w-[500px] sm:w-full w-full  mx-auto'/></figure>
                    </div>
                    <div className='text-center mt-4'>
                        <h1 className='text-lg font-semibold'>Brand: {category_name}</h1>
                        <h1 className='text-lg font-semibold'>Model: {product_name}</h1>
                        <h1 className='text-lg font-semibold'>Total Pay: {resale_price} Taka</h1>
                        <h1 className='text-lg font-semibold'>Seller Name: {seller_name}</h1>
                        <h1 className='text-lg font-semibold'>Seller Email: {email}</h1>
                    </div>
                </div>


                <div className='lg:px-0 md:px-6 sm:px-6 px-6 lg:w-1/2 md:w-full sm:w-full w-full'>

                    <form 
                    onSubmit={handleConfirmPayment}
                    className='-mt-12 md:w-3/4 lg:w-3/4 sm:w-full w-full  mx-auto'>

                        <input defaultValue={`Buyer Name: ${user?.displayName}`}
                            disabled
                            type="text" name='userName' placeholder="User Name" className="input input-bordered w-full my-2 font-semibold dark:text-black" required
                        />

                        <input defaultValue={`Buyer Email: ${user?.email}`}
                            disabled
                            type="email" name='email' placeholder="Email Address" className="input input-bordered w-full my-2 font-semibold dark:text-black" required
                        />

                        <div className='flex justify-evenly items-center gap-x-4 lg:flex-row md:flex-row sm:flex-col flex-col'>
                            <input defaultValue={`${category_name} ${product_name}`}
                                disabled type="text" name='productName' placeholder="Product Name" className="input input-bordered font-semibold w-full my-2 dark:text-black"
                            />

                            <input defaultValue={`Price: ${resale_price} Taka`}
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
                                className="select select-bordered w-1/2 dark:text-black">
                                <option value="BDT">BDT</option>
                                <option value="USD">USD</option>
                            </select>

                        </div>

                        <input type="submit" value="Confirm Payment" className='w-full bg-green-700 text-white text-xl py-2 rounded-md mt-4 mb-2'
                        />

                    </form>
                </div>


            </div>
        </div>
    );
};

export default BikeDetailsForBuying;