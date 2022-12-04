import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductBookingModal from '../BookingModal/ProductBookingModal';
import BikeDetailsCard from './BikeDetailsCard';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';





const BikeDetails = () => {

    const bikeDetails = useLoaderData();
    console.log(bikeDetails);

    

    const [bikeInfoDetails, setBikeInfoDetails] = useState(null);


    const [newBikeDetails, setNewBikeDetails] = useState(bikeDetails);

    //sort the services based on price
    const [isAsc, setIsAsc] = useState(true);


    //search the services by service name er jonno state and ref use kora to get the search input field value;
    const [search, setSearch] = useState('');
    const searchRef = useRef();


    // useEffect(() => {
    //     fetch(`http://localhost:5000/category?service=${isAsc ? 'asc' : 'desc'}&search=${search}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setNewBikeDetails(data);
    //         })
    // }, [isAsc, search])


    //code for searching the services with name
    const handleSearch = () => {
        console.log(searchRef.current.value)
        setSearch(searchRef.current.value);

    }




    return (
        <div>
            <div className='flex justify-center items-center gap-x-4  mx-4 sm:mx-4 md:mx-4 lg:mx-10 mt-10 bg-indigo-900 text-white rounded-xl dark:mx-4 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10'>
                <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center py-2'> {bikeDetails[0].category_name} Bikes</h1>
            </div>




            <div className='flex justify-around items-center mt-2 lg:flex-row md:flex-row sm:flex-col flex-col mx-4 sm:mx-4 md:mx-12 lg:mx-12'>

                {/* Sort the Bikes by Ascending or descending order with input select box*/}
                <div className='flex justify-center items-center lg:flex-row md:flex-row sm:flex-col flex-col'>
                    <div className="mr-3 bg-blue-800 hover:bg-blue-800 py-3 rounded-md  text-white hidden lg:block dark:bg-black dark:border-green-600 dark:border-2 dark:text-white">
                        <label className="mr-3  py-3 rounded-md px-3 text-white">
                            <span className='text-md'>Filter By Price</span>
                        </label>
                    </div>

                    <div className='lg:w-[400px] md:w-[400px] sm:w-[250px] w-[250px]'>
                        <select onChange={() => setIsAsc(!isAsc)} className="select select-bordered w-full max-w-xs my-8 dark:text-black">
                            <option className='text-lg dark:text-black' value="Low To High">Low To High</option>
                            <option className='text-lg dark:text-black' value='High To Low'>High To Low</option>
                        </select>
                    </div>
                </div>

                {/* Search services by name */}
                <div className='flex justify-center items-center lg:flex-row md:flex-row sm:flex-col flex-col'>
                    <input ref={searchRef} type="text" placeholder="Search Bike Model" className="input input-bordered input-primary  max-w-xs dark:text-black lg:w-[500px] md:w-full sm:w-[350px] w-[350px]" />

                    <button onClick={handleSearch} className="btn bg-blue-800 hover:bg-blue-800  ml-2 px-6 mt-4 sm:mt-4 md:mt-0 dark:bg-black dark:border-green-600 dark:border-2 dark:text-white">Search</button>
                </div>

            </div>




            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-10 my-6 dark:mx-4 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10 mx-2 sm:mx-2 md:mx-4 lg:mx-10'>
                {
                    newBikeDetails?.map(details => <BikeDetailsCard key={details._id} details={details} setBikeInfoDetails={setBikeInfoDetails}
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