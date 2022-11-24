import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BikeDetailsCard from './BikeDetailsCard';

const BikeDetails = () => {

    const bikeDetails = useLoaderData();

    return (
        <div>
            <div className='flex justify-center items-center gap-x-4  mx-2 sm:mx-2 md:mx-4 lg:mx-0 mt-10 bg-indigo-900 text-white rounded-xl'>
                <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center py-2'>Available {bikeDetails[0].category_name} Bikes</h1>
                <div className="avatar  hidden md:block">
                    <div className="w-12 rounded-xl">
                        <img src={bikeDetails[0].brand_logo} alt='' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 my-12 mx-auto'>
                {
                    bikeDetails?.map(details => <BikeDetailsCard key={details._id} details = {details}></BikeDetailsCard>)
                }
            </div>
        </div>
    );
};

export default BikeDetails;