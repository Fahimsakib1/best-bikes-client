import React from 'react';
import { RiMotorbikeFill } from 'react-icons/ri';
import yamaha from '../../../images/Brand-Logo/Yamaha.jpg';
import bajaj from '../../../images/Brand-Logo/Bajaj1.png';
import apache from '../../../images/Brand-Logo/Apche2.jpg';
import suzuki from '../../../images/Brand-Logo/Suzuki.png';
import { useQuery } from '@tanstack/react-query';
import BrandCategoriesCard from './BrandCategoriesCard';



const BrandCategories = () => {

    const {data : categories = [], isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://best-bikes-server.vercel.app/categories');
            const data = await res.json();
            return data;
        }
    })

    if(isLoading){
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div>
    }


    return (
        <div className='mt-24 mb-8 dark:mx-4 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10'>
            <div>
                
                <div className='flex justify-center items-center gap-x-4 bg-gray-800 text-base-100 rounded-md md:mx-2 lg:mx-2 sm:mx-4 mx-4 '>

                    <div className='flex justify-center items-center gap-x-4 '>
                        <div className="avatar  hidden md:block">
                            <div className="w-12 rounded-xl">
                                <img src={yamaha} alt='' />
                            </div>
                        </div>
                        <div className="avatar   hidden md:block">
                            <div className="w-12 rounded-xl">
                                <img src={suzuki} alt='' />
                            </div>
                        </div>
                    </div> 

                    <div className='mx-4'>
                        <h2 className='md:text-3xl lg:text-4xl font-semibold  sm:text-3xl text-2xl text-center py-4 '>Available Bike Brands</h2>
                    </div>

                    <div className='flex justify-center items-center gap-x-4'>
                        <div className="avatar  hidden md:block">
                            <div className="w-12 rounded-xl">
                                <img src={bajaj} alt='' />
                            </div>
                        </div>
                        <div className="avatar  hidden md:block">
                            <div className="w-12 rounded-xl">
                                <img src={apache} alt='' />
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12 '>
                    {
                        categories.map(category => <BrandCategoriesCard key ={category._id} category = {category}></BrandCategoriesCard>)
                    }
                </div> 

            </div>
        </div>
    );
};

export default BrandCategories;