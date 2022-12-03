import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';






const BuyerOrders = () => {

    const { user } = useContext(AuthContext);
    console.log("User on Buyer Orders Page", user);

    const { data: orders = [], refetch, isLoading } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: () => fetch(`https://best-bikes-server.vercel.app/orders?email=${user?.email}`)
            .then(res => res.json())
    })



    return (
        <div>
            {
                orders.length > 0 ?

                    <div>
                        <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-blue-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-12'>{user?.displayName} You have {orders?.length} Orders Pending</h1>
                        <div className='mt-10'>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full sm:w-full md:w-full lg:w-[1000px] mx-auto">

                                    <thead>
                                        <tr className='text-center dark:text-white'>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>No</th>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>Picture</th>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>Bike Model</th>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>Price</th>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>Seller</th>
                                            <th className='dark:bg-slate-800 border-2 dark:border-green-600'>Payment</th>

                                        </tr>
                                    </thead>

                                    <tbody className='dark:text-black dark:border-2 border-gray-300'>

                                        {
                                            orders?.map((order, index) =>

                                                <tr key={order._id} className='dark:bg-gray-800 border-1 border-gray-300 text-center'>

                                                    <td className='font-bold dark:bg-gray-800 border-1 border-gray-300 dark:text-white '>
                                                        {index + 1}
                                                    </td>

                                                    <td className='dark:bg-gray-800 border-1 border-gray-300 dark:text-white'>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar mx-auto">
                                                                <div className="mask mask-squircle w-16 h-16 text-center">
                                                                    <img className='' src={order.productImage} alt="ProductImage" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className='font-bold text-md dark:bg-gray-800 border-1 border-gray-300 dark:text-white'>
                                                        {order.companyName} {order.productName}
                                                    </td>

                                                    <td className='text-blue-600 font-semibold dark:bg-gray-800 border-1 border-gray-300 dark:text-white'>
                                                        {order.price} Taka
                                                    </td>

                                                    <td className='dark:bg-gray-800 border-1 border-gray-300 dark:text-white'>
                                                        {order.sellerName}
                                                    </td>

                                                    <th className='dark:bg-gray-800 border-1 border-gray-300 dark:text-white'>
                                                        {/* <button title='Click to Pay' className=" bg-blue-600 hover:bg-blue-700 px-8 btn  border-0 btn-sm">Pay</button> */}

                                                        {
                                                            order.price && !order.paid &&
                                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                                <button title='Click to Pay' className=' bg-blue-800 hover:bg-blue-800 px-8 btn  border-0 btn-sm'>Pay</button>
                                                            </Link>
                                                        }

                                                        {
                                                            order.price && order.paid && <span className='font-bold bg-green-700 rounded-md px-6 py-1 text-white'>Paid</span>
                                                        }

                                                    </th>

                                                </tr>

                                            )
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>

                    :

                    <div className=''>
                        <p className='text-4xl text-center mt-40 mb-2 text-gray-500 font-semibold'> {user?.displayName} You Have Not Booked Any Bikes Yet..</p>
                        <p className='text-2xl text-center'>Want To Book Bike? <Link to='/' className='text-blue-600 font-semibold'>Click Here</Link></p>
                    </div>
            }
        </div>
    );
};

export default BuyerOrders;