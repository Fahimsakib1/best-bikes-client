import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaRegUserCircle } from 'react-icons/fa';
import DeleteBuyerModal from './DeleteBuyerModal';
import useTitle from '../../../Hooks/useTitle';



const AllBuyers = () => {

    useTitle('All Buyers'); 
    
    const [buyerInfo, setBuyerInfo] = useState(null);

    const { data: buyers = [], refetch, isLoading } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://best-bikes-server.vercel.app/buyers', {
                headers: {
                    authorization: `bearer ${localStorage.getItem('bestBikeToken')}`
                }
            });
            const data = await res.json();
            return data;

        }
    })


    if (isLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-600 mx-auto mt-64"></div>
    }

    const closeModal = () => {
        setBuyerInfo(null)
    }



    const handleDeleteBuyer = (id, buyerName) => {
        fetch(`https://best-bikes-server.vercel.app/buyers/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('bestBikeToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Done!',
                        `Buyer ${buyerName} Deleted Successfully`,
                        'success'
                    )
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong',
                        text: `Can not Delete Buyer ${buyerName}`
                    })
                }
            })
    }






    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-violet-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-8'> Total Buyers {buyers?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full mb-12  sm:w-full md:w-full lg:w-[1100px] mx-auto">

                    <thead className=''>
                        <tr className='text-center dark:text-white'>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>No</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Picture</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Buyer Name</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Email</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Action</th>
                        </tr>
                    </thead>

                    <tbody className='dark:text-black border-2 border-gray-300'>

                        {
                            buyers?.map((buyer, index) =>
                                <tr key={buyer._id} className=' dark:bg-gray-800 border-1 border-gray-300 dark:text-white text-center'>

                                    <td className='font-bold dark:bg-gray-800 border-1 border-gray-300 dark:text-white  text-center'>
                                        {index + 1}
                                    </td>

                                    <td className='dark:bg-gray-800 border-1 border-gray-300 text-center dark:text-white '>
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

                                    <td className='font-bold dark:bg-gray-800 border-1 dark:text-white  border-gray-300 text-center'>
                                        {buyer.name}
                                    </td>

                                    <td className='dark:bg-gray-800 border-1 border-gray-300 text-center dark:text-white '>{buyer.email}</td>

                                    {/* <td className='flex justify-evenly items-center  dark:bg-gray-800 border-1 border-gray-300 text-center dark:text-white '>

                                        <label
                                            onClick={() => setBuyerInfo(buyer)}
                                            htmlFor="delete-buyer-modal"
                                        >
                                            <FaTrashAlt className=' text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                        </label>
                                    </td> */}

                                    <td className='dark:bg-gray-800 border-gray-300'>
                                        <label
                                            className='flex justify-evenly items-center  dark:bg-gray-800 border-gray-300 text-center dark:text-white'
                                            onClick={() => setBuyerInfo(buyer)}
                                            htmlFor="delete-buyer-modal"
                                        >
                                            <FaTrashAlt className='  text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                        </label>
                                    </td>

                                </tr>)

                        }


                    </tbody>

                </table>

            </div>

            {
                buyerInfo &&
                <DeleteBuyerModal
                    closeModal={closeModal}
                    handleDeleteBuyer={handleDeleteBuyer}
                    buyerInfo={buyerInfo}
                >
                </DeleteBuyerModal>
            }

        </div>
    );
};

export default AllBuyers;