import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
import bajajLogo from '../../images/Brand-Logo/Bajaj1.png';
import yamahaLogo from '../../images/Brand-Logo/Yamaha.jpg';
import suzukiLogo from '../../images/Brand-Logo/suzuki1.webp';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaRegUserCircle } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import { useQuery } from '@tanstack/react-query';




const BikeDetailsCard = ({ details, setBikeInfoDetails }) => {


    const { user, loading } = useContext(AuthContext);

    const { category_name, img, product_name, location, original_price, resale_price, years_of_use, posted_date, milage, condition, seller_name, category_id, email, mobile, _id, description, bookingStatus } = details

    if (loading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-orange-600 mx-auto mt-64"></div>
    }



    //get the time of report
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    const MonthDateYear = [month, day, year].join('-');
    const reportDate = MonthDateYear + ' ' + currentTime



    const handleReportToAdmin = () => {

        console.log("Product Name", product_name, seller_name, location)

        const reportedProductInfo = {
            productDataBaseId: _id,
            productName: product_name,
            brandName: category_name,
            productImage: img,
            location: location,
            sellingPrice: resale_price,
            years_use: years_of_use,
            product_posted_date: posted_date,
            report_posted_date: reportDate,
            sellerName: seller_name,
            sellerEmail: email,
            sellerMobileNumber: mobile,
            category_id: category_id,
            productCondition: condition,
            reporterName: user?.displayName || 'Unregistered User',
            reporterImage: user?.photoURL || 'No Image Added',
            reporterEmail: user?.email,
            reporterRole: user?.role || 'No Role Found'
        }

        fetch('http://localhost:5000/reportedProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reportedProductInfo)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire(
                        'Good',
                        `${user?.displayName} Your Report For ${product_name} has been added.`,
                        'success'
                    )
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: `${result.message}`,
                        text: 'Report Not Added. Try Again Properly'
                    })
                }
            })

    }




    const alreadyBookedProduct = () => {
        Swal.fire({
            icon: 'error',
            title: 'You have already booked this Bike',
            text: 'Visit Categories To get More bikes'
        })
    }



    return (
        <div className='lg:mx-0 md:mx-2 sm:mx-2 mx-2'>
            <div className="flex mx-auto flex-col max-w-lg p-6 space-y-6 overflow-hidden shadow-xl bg-gray-900 text-gray-100 rounded-xl">
                <div className="flex space-x-4 justify-between flex-col sm:flex-col md:flex-row my-auto">
                    <img alt="" src={category_id === '1' ? yamahaLogo : category_id === '2' ? bajajLogo : suzukiLogo} className="object-cover w-12 h-12 rounded-full shadow bg-gray-500 text-center" />
                    <div className="flex flex-col space-y-1 lg:my-0 md:my-2 sm:my-2 my-2">
                        <p className="text-md font-semibold text-center">Posted On</p>
                        <span className="text-sm text-center text-gray-400">{posted_date}</span>
                    </div>

                    <div className='my-auto text-center  lg:my-auto md:my-4 sm:my-2'>
                        {
                            details.status === 'Verified'
                                ?

                                <div className='flex justify-between items-center gap-x-2'>
                                    <p className='text-lg'>Seller <span className='text-green-600'>{seller_name}</span></p>
                                    <GoVerified className='text-blue-600 text-2xl'></GoVerified>
                                </div>
                                :
                                <p className='text-lg'>Seller <span className='text-blue-600'>{seller_name}</span></p>
                        }
                    </div>
                </div>

                <div className=''>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-[250px] bg-gray-500 rounded-lg" />
                    <div className='flex justify-between items-center'>
                        <h2 className="mb-1 text-xl font-semibold">Brand: {category_name}</h2>
                        <h2 className="mb-1 text-xl font-semibold text-blue-700">Model : {product_name}</h2>
                    </div>
                    <div>
                        <p className='text-gray-400'>{description}</p>
                    </div>
                    <div className='flex flex-wrap justify-between mt-2'>
                        <h2 className='text-lg'>Original Price: {original_price} Taka</h2>
                        <h2 className='text-lg'>Used {years_of_use} {years_of_use > 1 ? 'Years' : 'Year'}</h2>
                    </div>
                </div>


                <div className="flex flex-wrap justify-between items-center pb-4">
                    <div className="space-x-2">
                        <h2 className='text-lg '>Resale Price: <span className='text-green-600'>{resale_price}  Taka</span></h2>
                    </div>
                    <div className="flex text-sm  bg-green-700 text-white px-4 rounded-md py-1">
                        <ImLocation className='my-auto text-xl mr-1'></ImLocation>
                        <h2 className='text-lg'> {location}</h2>
                    </div>
                </div>

                <div className='mx-auto'>
                    {/* Modal Button */}
                    {
                        bookingStatus !== 'Booked' ?
                            <label
                                onClick={() => setBikeInfoDetails(details)}
                                htmlFor="product-booking" className="bg-blue-800 px-12 py-1 rounded-md btn hover:bg-blue-700 border-0 btn-md">Book Now
                            </label>
                            :
                            <button onClick={alreadyBookedProduct}  className='btn bg-gray-600 hover:bg-gray-600 px-12  rounded-md text-white border-0'>Booked</button>
                    }
                </div>

                <div className='flex justify-end items-center gap-x-4'>
                    <button title='Report to Admin' className='btn btn-xs bg-red-700 text-white hover:bg-red-700 border-0' onClick={handleReportToAdmin}>Report To Admin</button>
                </div>

            </div>

        </div>

    ); 
};

export default BikeDetailsCard;