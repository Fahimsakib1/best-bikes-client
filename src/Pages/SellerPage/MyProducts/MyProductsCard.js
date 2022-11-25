import React from 'react';
import bajajLogo from '../../../images/Brand-Logo/Bajaj1.png';
import yamahaLogo from '../../../images/Brand-Logo/Yamaha.jpg';
import suzukiLogo from '../../../images/Brand-Logo/suzuki1.webp';
import { SiSubstack } from 'react-icons/si';
import {FaTrashAlt} from 'react-icons/fa'

const MyProductsCard = ({ product, handleDeleteProduct }) => {

    const { _id, category_name, img, product_name, location, original_price, resale_price, years_of_use, posted_date, milage, condition, seller_name, category_id } = product


    // On the "My Products" page, display sales status (available or sold), price, and any other relevant information you want to show. A seller will be able to delete any of his/her product. Please note there will be a special button for each unsold/available product where the seller can hit the button to advertise.


    return (
        <div className=''>
            <div className="rounded-md shadow-md sm:w-96 lg:w-80 md:w-80 bg-gray-900 text-gray-100 mb-10 sm:mb-10 md:mb-10 lg:mb-10 lg:mx-0 md:mx-4 sm:mx-4 mx-4 ">

                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={category_id === '1' ? yamahaLogo : category_id === '2' ? bajajLogo : suzukiLogo} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold leading-none">Model: {product_name}</h2>
                            <span className="inline-block text-xs leading-none text-gray-400">Posted: {posted_date}</span>
                        </div>
                    </div>
                </div>

                <img src={img} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                <div className="p-3">

                    <div className='flex gap-x-2 items-center justify-between'>
                        <p className='mb-1 text-blue-500'>Price: {resale_price} Taka</p>
                        <div className='flex gap-x-2 items-center'>
                            <SiSubstack className='text-orange-600'></SiSubstack>
                            <p className='mb-1 '>{condition}</p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-2 mb-1">
                        <div className="flex items-center space-x-3" onClick={() => handleDeleteProduct(_id, product_name)}>
                            <FaTrashAlt className='text-2xl text-red-600' title='Delete Product'></FaTrashAlt>
                        </div>

                        {/* Bottom Right Button */}
                        <button type="button" title="Advertise Product" className="btn btn-xs border-0 bg-green-700 text-white">
                            Advertise
                        </button>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MyProductsCard;