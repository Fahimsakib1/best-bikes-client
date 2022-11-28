import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { GoVerified } from 'react-icons/go';

const AdvertisedItems = () => {

    const { data: advertisedProducts = [], isLoading } = useQuery({
        queryKey: ['advertisedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertisedProducts', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('bestBikeToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    // if(isLoading){
    //     return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div>
    // }




    return (
        <div className=''>
            <div className='mt-10'>
                {
                    advertisedProducts.length > 0 &&

                    <div>
                        <h1 className='text-5xl text-center mb-10 text-blue-600'> Advertised Products</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4'>
                            {
                                advertisedProducts.map(singleProduct => {
                                    return singleProduct.bookingStatus !== 'Paid' &&

                                        <div key={singleProduct._id} className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
                                            <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
                                                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                                    <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">

                                                        <img src={singleProduct.img} alt="" className="w-56 h-56 mb-2 -mt-20 bg-center bg-cover rounded-md " />
                                                        <p className="text-sm  text-blue-500">Brand: {singleProduct.category_name}</p>
                                                        <p className="text-sm  text-blue-500">Model: {singleProduct.product_name}</p>
                                                        <p className="text-sm  text-blue-500">Price: {singleProduct.resale_price} Taka</p>

                                                    </p>
                                                </div>
                                                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-500 dark:text-gray-900">
                                                    <img src={singleProduct.img} alt="" className="w-20 h-20 mb-2 -mt-16 bg-center bg-cover rounded-full " />
                                                    <div className='flex justify-center items-center'>
                                                        <p className="text-xl font-semibold leading-tight">Seller:  {singleProduct.seller_name}</p>
                                                        {
                                                            singleProduct.status === 'Verified' && <GoVerified className='text-white text-xl ml-2'></GoVerified>
                                                        }
                                                    </div>
                                                    <p className="text-sm  font-bold mt-2">Mobile: {singleProduct.mobile}</p>
                                                </div>
                                            </div>
                                        </div>
                                }

                                )
                            }
                        </div>
                    </div>
                }
            </div>
        </div> 
    );
};

export default AdvertisedItems;