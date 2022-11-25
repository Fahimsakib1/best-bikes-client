import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaRegUserCircle } from 'react-icons/fa';



const AllBuyers = () => {

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/buyers');
            const data = await res.json();
            return data;

        }
    })


    if (isLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div>
    }


    // The all-sellers route will have a name, email address, delete button, and verify button. Admin will be able to verify a seller. When clicked on the verify button, the seller's status will change from unverified to verified(show a blue tick when the seller is verified), and this status will be shown on the products added by a verified seller.



    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-blue-900 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'> Total Buyers {buyers?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full mb-12  ">

                    <thead className=''>
                        <tr className='text-center'>
                            <th className=' '>No</th>
                            <th className=' '>Picture</th>
                            <th className=' '>Buyer Name</th>
                            <th className=' '>Email</th>
                            <th className=' '>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.map((buyer, index) =>
                                <tr key={buyer._id} className='text-center '>

                                    <td className='font-bold '>
                                        {index + 1}
                                    </td>

                                    <td className=''>
                                        <div className="flex items-center space-x-3">
                                            {
                                                buyer.photo
                                                    ?
                                                    <div className="avatar mx-auto">
                                                        <div className="w-12 rounded-full">
                                                            <img className='text-center' src={buyer.photo} alt="BuyerImage" />
                                                        </div>
                                                    </div>
                                                    :
                                                    <div className="avatar mx-auto">
                                                        <div className="w-12 ">
                                                            <FaRegUserCircle className='text-5xl text-center'></FaRegUserCircle>
                                                        </div>
                                                    </div>
                                            }
                                            
                                        </div>
                                    </td>

                                    <td className='font-bold '>
                                        {buyer.name}
                                    </td>

                                    <td className=''>{buyer.email}</td>

                                    <td className='flex justify-evenly items-center gap-x-4'>
                                        {/* <label
                                            onClick={() => setDeletingDoctor(doctor)}
                                            htmlFor="confirmation-modal"
                                            className="btn dark:bg-gray-900 hover:bg-white bg-white border-0 ">
                                            <FaTrashAlt className=' text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                        </label> */}
                                        
                                        <FaTrashAlt className=' text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                    </td>

                                </tr>)

                        }


                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default AllBuyers;