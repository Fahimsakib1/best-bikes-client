import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const SSLPaymentSuccessPage = () => {



    //to get the transactionID from Browser URL
    const location = useLocation();
    // console.log(location.search)
    const query = new URLSearchParams(location.search)
    const transactionID = query.get("transactionID")
    console.log(transactionID);


    // Fetch the bike details after payment by transactionID
    const { data: payment = [] } = useQuery({
        queryKey: ['bikePayment', transactionID],
        queryFn: () => fetch(`http://localhost:5000/bikePayment/${transactionID}`)
            .then(res => res.json())
    })

    const { currency, postCode, buyerName, buyerEmail, sellingPrice, PaidDate, paymentGateway, bikeImage, bikeModel, bikeCompany, buyerLocation } = payment;


    const date = PaidDate;
    const splitDate1 = date.split('T')[0];
    const splitDate2 = date.split('T')[1].split('.')[0];
    const paymentDate = splitDate1 + '   ' + splitDate2
    console.log(splitDate1)
    console.log(splitDate2)

    





    return (
        <div>

            <div className='lg:w-[400px] md:w-1/2 sm:w-full w-full mx-auto  md:mt-16 lg:mt-6 sm:mt-6 mt-6 lg:px-0 md:px-0 sm:px-4 px-4'>

                <div className='border-2 border-blue-600 rounded-md'>
                    <h1 className='text-3xl text-center  font-bold mb-2 mt-2'>RECEIPT</h1>
                    <img src={bikeImage} alt="" className='w-44 sm:w-44 md:w-60 lg:w-60  mx-auto rounded-lg' />


                    <h1 className='text-xl text-center text-green-600 font-semibold mt-2 mb-1 font-mono'>*** Payment Successful! *** </h1>

                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'> Model</h1>
                        <h1 className='text-md'>{bikeCompany} {bikeModel}</h1>
                    </div>


                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'>Price</h1>
                        <h1 className='text-md'> {sellingPrice} Taka</h1>
                    </div>

                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'>Buyer</h1>
                        <h1 className='text-md'> {buyerName}</h1>
                    </div>

                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'>Email</h1>
                        <h1 className='text-md'> {buyerEmail}</h1>
                    </div>

                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'> Shipping</h1>
                        <h1 className='text-md'> {buyerLocation}</h1>
                    </div>

                    <div className='flex justify-between items-center my-2 lg:w-[280px] md:w-3/4 sm:w-3/4 w-3/4 mx-auto'>
                        <h1 className='text-md'> Date </h1>
                        <h1 className='text-md'> {paymentDate}</h1>
                    </div>

                    <h1 className='text-2xl text-center font-bold mb-1 font-mono'>THANK YOU</h1>


                    {/* <div className='my-2'>
                        <h1 className='text-sm text-center'>Payment By {paymentGateway}</h1>
                    </div> */}


                </div>

            </div>

            <div className='flex justify-center items-center lg:w-[400px] md:w-1/2 sm:w-full w-full mx-auto gap-x-8 print:hidden'>
                <div className='text-center print:hidden'>
                    <button onClick={() => window.print()} className='bg-blue-800 px-12 rounded-md mx-auto text-md text-white mt-6 py-2' >Print</button>
                </div>

                <Link to='/'>
                    <div className='text-center print:hidden'>
                        <button className='bg-rose-600 px-12 rounded-md mx-auto text-md text-white mt-6 py-2' >Back</button>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default SSLPaymentSuccessPage;