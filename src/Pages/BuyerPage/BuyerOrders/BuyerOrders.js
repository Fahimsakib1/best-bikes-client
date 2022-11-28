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


    // The My Orders route will have a table/cards. Each card/ table row will be an order having an image, title, price, and a pay button. On clicking the pay button, to take the user the payment page with fields for card details will pop up, or the user will be taken to a route where there will be a form for filling up card details. Save the payment information in the database and inform the user via a modal/toast. Don't forget to update the button text to "paid" after payment. Please note, payment will be done by Stripe. 









    return (
        <div>
            {
                orders.length > 0 ?

                    <div>
                        <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-blue-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'>{user?.displayName} You have {orders?.length} Orders Pending</h1>
                        <div className='mt-10'>
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">

                                    <thead>
                                        <tr className='text-center'>
                                            <th>No</th>
                                            <th>Picture</th>
                                            <th>Bike Model</th>
                                            <th>Price</th>
                                            <th>Seller</th>
                                            <th>Payment</th>

                                        </tr>
                                    </thead>

                                    <tbody>

                                        {
                                            orders?.map((order, index) =>

                                                <tr key={order._id} className='text-center'>

                                                    <td className='font-bold '>
                                                        {index + 1}
                                                    </td>

                                                    <td className=''>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar mx-auto">
                                                                <div className="mask mask-squircle w-16 h-16 text-center">
                                                                    <img className='' src={order.productImage} alt="ProductImage" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className='font-bold text-md'>
                                                        {order.companyName} {order.productName}
                                                    </td>

                                                    <td className='text-blue-600 font-semibold'>
                                                        {order.price} Taka
                                                    </td>

                                                    <td>
                                                        {order.sellerName}
                                                    </td>

                                                    <th>
                                                        {/* <button title='Click to Pay' className=" bg-blue-600 hover:bg-blue-700 px-8 btn  border-0 btn-sm">Pay</button> */}

                                                        {
                                                            order.price && !order.paid &&
                                                            <Link to={`/dashboard/payment/${order._id}`}>
                                                                <button title='Click to Pay' className=' bg-blue-600 hover:bg-blue-700 px-8 btn  border-0 btn-sm'>Pay</button>
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