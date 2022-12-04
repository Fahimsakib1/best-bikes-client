import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBookingModal from '../BookingModal/ProductBookingModal';
import BikeDetailsCard from './BikeDetailsCard';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';





const BikeDetails = () => {

    const bikeDetails = useLoaderData();
    console.log(bikeDetails);

    const [bikeInfoDetails, setBikeInfoDetails] = useState(null);




    return (
        <div>
            <div className='flex justify-center items-center gap-x-4  mx-4 sm:mx-4 md:mx-4 lg:mx-10 mt-10 bg-indigo-900 text-white rounded-xl dark:mx-4 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10'>
                <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center py-2'>Available {bikeDetails[0].category_name} Bikes</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 my-12 dark:mx-4 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10 mx-4 sm:mx-4 md:mx-4 lg:mx-10'> 
                {
                    bikeDetails?.map(details => <BikeDetailsCard key={details._id} details={details} setBikeInfoDetails={setBikeInfoDetails}
                    ></BikeDetailsCard>)
                }
            </div>

            {
                bikeInfoDetails && <ProductBookingModal bikeInfoDetails={bikeInfoDetails}
                    setBikeInfoDetails={setBikeInfoDetails}
                ></ProductBookingModal>
            }


        </div> 
    );
};

export default BikeDetails;