import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import { useQuery } from '@tanstack/react-query';
import { BiSad } from 'react-icons/bi';
import { FaTrashAlt } from 'react-icons/fa';
import { FaRegUserCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';



const AllRegisteredUsers = () => {

    useTitle('All Users');
    const { user } = useContext(AuthContext);

    const { data: allUsers = [], refetch, isLoading } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await fetch('https://best-bikes-server.vercel.app/allUsers');
            const data = await res.json();
            return data;
        }
    })



    const handleMakeAdmin = (id, name, email) => {

        fetch(`https://best-bikes-server.vercel.app/makeAdmin?email=${email}`, {
            method: 'PUT'
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0 ) {
                toast.success(`Congratulations!! ${name}, You Have Become Our New Admin`);
                refetch();
            }

            else {
                Swal.fire({
                    icon: 'error',
                    title: `${data.message}`,
                    text: `Can not give ${name} the role of Admin`
                })
            }
        })
    }

    


    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6  bg-blue-900 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-8 dark:mx-4 dark:sm:mx-4 dark:md:mx-8 dark:lg:mx-14'> {allUsers?.length} Registered Users</h1>

            {
                allUsers.length > 0
                    ?
                    <div className="overflow-x-auto">
                        <table className="table w-full mb-12  sm:w-full md:w-full lg:w-[1100px] mx-auto">

                            <thead className=''>
                                <tr className='text-center dark:text-white'>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>No</th>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Picture</th>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Uer Name</th>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Email</th>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Role</th>
                                    <th className=' dark:bg-slate-800 border-2 dark:border-green-600'>Action</th>
                                </tr>
                            </thead>

                            <tbody className='dark:text-black border-2 border-gray-300'>

                                {
                                    allUsers?.map((singleUser, index) =>
                                        <tr key={singleUser._id} className=' dark:bg-gray-800 border-1 border-gray-300 dark:text-white text-center'>

                                            <td className='font-bold dark:bg-gray-800 border-1 border-gray-300 dark:text-white  text-center'>
                                                {index + 1}
                                            </td>

                                            <td className='dark:bg-gray-800 border-1 border-gray-300 text-center dark:text-white '>
                                                <div className="flex items-center space-x-3">
                                                    {
                                                        singleUser.photo
                                                            ?
                                                            <div className="avatar mx-auto">
                                                                <div className="w-14 rounded-full">
                                                                    <img className='text-center' src={singleUser.photo} alt="BuyerImage" />
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
                                                {singleUser.name}
                                            </td>

                                            <td className='dark:bg-gray-800 border-1 border-gray-300 text-center dark:text-white '>
                                                {singleUser.email}
                                            </td>

                                            <td className='dark:bg-gray-800 border-gray-300'>
                                                {singleUser.role}
                                            </td>

                                            <td className='dark:bg-gray-800 border-gray-300'>
                                                {
                                                    singleUser?.role !== 'Admin' 
                                                    ?
                                                    <button onClick = {() => handleMakeAdmin(singleUser._id, singleUser.name, singleUser.email)} className = 'btn btn-sm border-1 dark:border-1 bg-blue-800 hover:bg-blue-900  dark:bg-black dark:border-green-600'>Make Admin</button>
                                                    :
                                                    <button className = 'btn btn-sm border-0 bg-green-700 hover:bg-green-700'>Admin</button>
                                                }
                                            </td>

                                        </tr>)

                                }


                            </tbody>

                        </table>

                    </div>

                    :
                    <div className='flex justify-center items-center gap-x-6 flex-col lg:flex-row md:flex-row sm:flex-col ml-8'>
                        <p className=' text-3xl sm:text-3xl md:text-5xl text-center text-gray-600 font-semibold mt-28 dark:text-gray-400'>No Payment History</p>
                        <BiSad className='text-5xl sm:text-5xl md:text-7xl mt-2 sm:mt-2 md:mt-28 text-gray-600 font-semibold dark:text-gray-400'></BiSad>
                    </div>
            }

        </div>
    );
};

export default AllRegisteredUsers;