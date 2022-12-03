import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { FaRegUserCircle } from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import DeleteSellerModal from './DeleteSellerModal';
import { Link } from 'react-router-dom';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import toast from 'react-hot-toast';





const AllSellers = () => {

    const [deleteSeller, setDeleteSeller] = useState(null);


    const { data: sellers = [], refetch, isLoading } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://best-bikes-server.vercel.app/sellers', {
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



    const handleDeleteSeller = (id, sellerName) => {
        console.log(id, sellerName);

        fetch(`https://best-bikes-server.vercel.app/sellers/${id}`, {
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
                        `Seller ${sellerName} Deleted Successfully`,
                        'success'
                    )
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong',
                        text: `Can not Delete Seller ${sellerName}`
                    })
                }
            })

    }

    const closeModal = () => {
        setDeleteSeller(null);
    }




    const handleVerifySeller = (email) => {
        
        //console.log(email)
        
        fetch(`https://best-bikes-server.vercel.app/sellers?email=${email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount > 0) {
                toast.success('Seller Verified By Admin');
                refetch();
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong',
                    text: 'Try Again'
                })
            }
        })
    }






    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-violet-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-8 dark:mx-6 dark:sm:mx-6 dark:md:mx-16 dark:lg:mx-16'> Total Sellers {sellers?.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full mb-12  sm:w-full md:w-full lg:w-[1100px] mx-auto">

                    <thead className=''>
                        <tr className='text-center dark:text-white'>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>No</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Picture</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Seller Name</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Email</th>
                            <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Action</th>
                        </tr>
                    </thead>

                    <tbody className = 'dark:text-black border-2 border-gray-300'>

                        {
                            sellers?.map((seller, index) =>
                                <tr key={seller._id} className=' dark:bg-gray-800 border-1 border-gray-300 dark:text-white text-center'>

                                    <td className='font-bold dark:bg-gray-800 border-1 border-gray-300 dark:text-white text-center'>
                                        {index + 1}
                                    </td>

                                    <td className='dark:bg-gray-800 border-1 border-gray-300 dark:text-white text-center'>
                                        <div className="flex items-center space-x-3">
                                            {
                                                seller.photo 
                                                    ?
                                                    <div className="avatar mx-auto">
                                                        <div className="w-12 rounded-full">
                                                            <img className='text-center' src={seller.photo} alt="BuyerImage" />
                                                        </div>
                                                        {
                                                            seller.status === 'Verified' &&
                                                            <MdOutlineVerifiedUser className='mr-1 text-xl -mt-1 text-green-600 font-bold'></MdOutlineVerifiedUser>
                                                        }
                                                    </div>
                                                    :
                                                    <div className="avatar mx-auto">
                                                        <div className="w-12 ">
                                                            <FaRegUserCircle className='text-5xl text-center'></FaRegUserCircle>
                                                        </div>
                                                        {
                                                            seller.status === 'Verified' &&
                                                            <MdOutlineVerifiedUser className='mr-1 text-xl -mt-1 text-green-600 font-bold'></MdOutlineVerifiedUser>
                                                        }
                                                    </div>
                                            }

                                        </div>
                                    </td>

                                    <td className='font-bold dark:bg-gray-800  border-gray-300 dark:text-white text-center'>
                                        {seller.name}
                                    </td>

                                    <td className='dark:bg-gray-800  border-gray-300 dark:text-white text-center'>{seller.email}</td>

                                    <td className=' dark:bg-gray-800 border-gray-300 flex justify-evenly items-center gap-x-4'>
                                        
                                        {
                                            seller?.status !== 'Verified' ?
                                                <button onClick={() => handleVerifySeller(seller.email)} className='bg-blue-600 btn btn-sm hover:bg-blue-600 border-0  mt-[20px] mb-4'>Verify</button>
                                                :
                                                <button className='btn btn-xs bg-green-600 hover:bg-green-600 border-0 mt-[30px] mb-4' title='Verified Seller'> <MdOutlineVerifiedUser className='mr-1 text-lg'></MdOutlineVerifiedUser> Verified</button>
                                        }

                                        <label
                                            className='border-1 border-gray-300 dark:text-white text-center '
                                            onClick={() => setDeleteSeller(seller)}
                                            htmlFor="delete-seller-modal"
                                        >
                                            <FaTrashAlt className=' text-2xl text-red-600  hover:text-red-700'></FaTrashAlt>
                                        </label>
                                    </td>

                                </tr>)

                        }


                    </tbody>

                </table>

            </div>

            {
                deleteSeller &&
                <DeleteSellerModal
                    deleteSeller={deleteSeller}
                    closeModal={closeModal}
                    handleDeleteSeller={handleDeleteSeller}
                >

                </DeleteSellerModal>
            }

        </div>
    );
};

export default AllSellers;