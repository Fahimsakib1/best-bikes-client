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
            const res = await fetch('http://localhost:5000/sellers', {
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

        fetch(`http://localhost:5000/sellers/${id}`, {
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
        
        fetch(`http://localhost:5000/sellers?email=${email}`, {
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
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-violet-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'> Total Sellers {sellers?.length}</h1>

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

                                    <td className='font-bold '>
                                        {seller.name}
                                    </td>

                                    <td className=''>{seller.email}</td>

                                    <td className='flex justify-evenly items-center gap-x-4'>
                                        
                                        {
                                            seller?.status !== 'Verified' ?
                                                <button onClick={() => handleVerifySeller(seller.email)} className='bg-blue-600 btn btn-sm hover:bg-blue-600 border-0'>Verify</button>
                                                :
                                                <button className='btn btn-xs bg-green-600 border-0'> <MdOutlineVerifiedUser className='mr-1 text-lg'></MdOutlineVerifiedUser> Verified</button>
                                        }

                                        <label
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