import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaRegUserCircle } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';





const AllSellers = () => {
    
    
    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            return data;

        }
    })


    if (isLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div>
    }

    
    
    
    
    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-blue-900 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'> Total Sellers {sellers?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full mb-12  ">

                    <thead className=''>
                        <tr className='text-center'>
                            <th className=' '>No</th>
                            <th className=' '>Picture</th>
                            <th className=' '>Seller Name</th>
                            <th className=' '>Email</th>
                            <th className=' '>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            sellers?.map((seller, index) =>
                                <tr key={seller._id} className='text-center '>

                                    <td className='font-bold '>
                                        {index + 1}
                                    </td>

                                    <td className=''>
                                        <div className="flex items-center space-x-3">
                                            {
                                                seller.photo
                                                    ?
                                                    <div className="avatar mx-auto">
                                                        <div className="w-12 rounded-full">
                                                            <img className='text-center' src={seller.photo} alt="BuyerImage" />
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
                                        {seller.name}
                                    </td>

                                    <td className=''>{seller.email}</td>

                                    <td className='flex justify-evenly items-center gap-x-4'>
                                        {/* <label
                                        onClick={() => setDeletingDoctor(doctor)}
                                        htmlFor="confirmation-modal"
                                        className="btn dark:bg-gray-900 hover:bg-white bg-white border-0 ">
                                        <FaTrashAlt className=' text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                    </label> */}
                                        <button className='bg-blue-600 btn btn-sm hover:bg-blue-600 border-0'>Verify</button>
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

export default AllSellers;