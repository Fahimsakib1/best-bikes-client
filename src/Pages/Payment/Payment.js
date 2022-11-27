import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);




const Payment = () => {
    
    const order = useLoaderData();
    const {productName, companyName, price, sellerEmail, buyerEmail, buyerName, buyerMobile, productImage} = order
    
    
    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-4 bg-blue-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'>Payment For {companyName} {productName}</h1>

            <h1 className='text-center text-sm sm:text-sm md:text-lg  bg-green-800 text-white py-1 rounded-md mx-16 sm:mx-16 md:mx-36 lg:mx-44'> {buyerName} You have to pay {price} Taka</h1>

            <div className='mt-6 mb-4'>
                <img className=' w-88 sm:w-96 md:w-96 h-56 text-center mx-auto rounded-lg' src={productImage} alt="" />
            </div>

            <div className=''>
                <Elements stripe={stripePromise}>
                    <CheckOutForm order = {order} />
                </Elements>
            </div>


        </div>
    );
};

export default Payment; 