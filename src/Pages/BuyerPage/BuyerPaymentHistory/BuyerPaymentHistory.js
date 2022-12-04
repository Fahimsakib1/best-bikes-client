import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiSad } from 'react-icons/bi';




const BuyerPaymentHistory = () => {

    useTitle('Payment History');

    const { user } = useContext(AuthContext);

    const { data: payments = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://best-bikes-server.vercel.app/paymentHistory?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })


    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-green-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-8 dark:mx-6 dark:sm:mx-6 dark:md:mx-16 dark:lg:mx-16'> Complete Payments  {payments?.length}</h1>

            {
                payments.length > 0
                    ?
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-0 mb-10'>
                        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  text-gray-100 mx-auto rounded-xl bg-gray-900 mb-6">
                            <ul className="flex flex-col divide-y divide-gray-700 my-4">
                                {
                                    payments.map(payment =>
                                        <li key={payment._id} className="flex flex-col py-3 sm:flex-row sm:justify-between ">
                                            <div className="flex w-full space-x-2 sm:space-x-4">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 mt-3 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={payment.photo} alt="Purchased Product" />
                                                <div className="flex flex-col justify-between w-full pb-4">
                                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                                        <div className="space-y-1">
                                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8 mt-2 text-blue-600">{payment.brand} {payment.productName}</h3>
                                                            <p className='text-green-500'>Price: {payment.price} Taka</p>
                                                            <p className="text-sm text-gray-400">Seller: {payment.sellerName ? payment.sellerName : 'Seller Name Not Found'}</p>
                                                            <p className="text-sm text-gray-400">Seller Email: {payment.sellerEmail ? payment.sellerEmail : 'Seller Email Not Found'}</p>
                                                            <p className="text-sm">Transaction ID: <span className='text-violet-500'>{payment.transactionId ? payment.transactionId : 'Transaction ID Not Found'}</span></p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    :
                    <>
                        <div className='flex justify-center items-center gap-x-6 flex-col lg:flex-row md:flex-row sm:flex-col ml-8'>
                            <p className=' text-3xl sm:text-3xl md:text-5xl text-center text-gray-600 font-semibold mt-28 dark:text-gray-400'>No Payment History</p>
                            <BiSad className='text-5xl sm:text-5xl md:text-7xl mt-2 sm:mt-2 md:mt-28 text-gray-600 font-semibold dark:text-gray-400'></BiSad>
                        </div>
                        <p className='text-center text-gray-600 font-semibold text-xl dark:text-gray-400'>{user?.displayName}, Don't save much. Life is Short. Buy what ever you want</p>
                    </>

            }

        </div>
    );
};

export default BuyerPaymentHistory;