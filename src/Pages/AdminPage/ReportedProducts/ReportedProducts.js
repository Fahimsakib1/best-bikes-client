import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { BsEmojiSmile } from 'react-icons/bs';
import Swal from 'sweetalert2';




const ReportedProducts = () => {

    const { data: reportedProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['reportedProducts'],
        queryFn: () => fetch('https://best-bikes-server.vercel.app/reportedProducts')
            .then(res => res.json())
    })

    

    const handleDeleteReport = (id) => {
        fetch(`https://best-bikes-server.vercel.app/reportedProducts/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(result => {
            if(result.deletedCount > 0){
                toast.success('Report Deleted Successfully');
                refetch();
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Something Went Wrong',
                    text: 'Can not Delete Report. Try Again'
                })
            }
        })
    }

    if(isLoading){
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-800 mx-auto mt-64"></div>
    }



    return (
        <div>
            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-red-700 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-8 dark:mx-4 dark:sm:mx-4 dark:md:mx-8 dark:lg:mx-14'> {reportedProducts?.length} Reports Found</h1>
            {
                reportedProducts.length > 0
                    ?
                    <div className='mx-2 sm:mx-2 md:mx-4 lg:mx-0 mb-10'>
                        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  text-gray-100 mx-auto rounded-xl bg-gray-900 mb-6">
                            <ul className="flex flex-col divide-y divide-gray-700">
                                {
                                    reportedProducts.map(report =>
                                        <li key={report._id} className="flex flex-col py-3 sm:flex-row sm:justify-between ">
                                            <div className="flex w-full space-x-2 sm:space-x-4">
                                                <img className="flex-shrink-0 object-cover w-24 h-24 mt-3 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={report.productImage} alt="Reported Products" />
                                                <div className="flex flex-col justify-between w-full pb-4">
                                                    <div className="flex justify-between w-full pb-2 space-x-2">
                                                        <div className="space-y-1">
                                                            <h3 className="text-lg font-semibold leading-snug sm:pr-8 mt-2">{report.productName}</h3>
                                                            <p className="text-sm text-gray-400">Seller: {report.sellerName}</p>
                                                            <p className="text-sm text-gray-400">Seller Email: {report.sellerEmail}</p>
                                                        </div>
                                                        <div className="text-right">
                                                            <button onClick={() => handleDeleteReport (report._id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1" title='Delete Report'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-8 h-8 fill-current text-red-600 mt-12">
                                                                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                                    <rect width="32" height="200" x="168" y="216"></rect>
                                                                    <rect width="32" height="200" x="240" y="216"></rect>
                                                                    <rect width="32" height="200" x="312" y="216"></rect>
                                                                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <p className=" text-sm sm:text-sm md:text-md ">Reported By: <span className=' text-green-600'>{report.reporterName}</span></p>
                                                    <p className="text-sm text-gray-400 md:block hidden">Report Time: {report.report_posted_date}</p>
                                                    <p className="text-sm text-gray-400 md:block hidden">Reporter Email: <span className='text-blue-600'>{report.reporterEmail}</span></p>

                                                </div>
                                            </div>
                                        </li>

                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center gap-x-6 flex-col lg:flex-row md:flex-row sm:flex-col'>
                        <p className=' text-3xl sm:text-3xl md:text-5xl text-center text-gray-600 font-semibold mt-28'>No Report Available</p>
                        <BsEmojiSmile className='text-5xl sm:text-5xl md:text-7xl mt-2 sm:mt-2 md:mt-28 text-gray-600 font-semibold'></BsEmojiSmile>
                    </div>
            }

        </div> 
    );
};

export default ReportedProducts;