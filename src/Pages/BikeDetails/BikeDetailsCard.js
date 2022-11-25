import React from 'react';
import { Link } from 'react-router-dom';
import { ImLocation } from 'react-icons/im';
import bajajLogo from '../../images/Brand-Logo/Bajaj1.png';
import yamahaLogo from '../../images/Brand-Logo/Yamaha.jpg';
import suzukiLogo from '../../images/Brand-Logo/suzuki1.webp';





const BikeDetailsCard = ({ details, setBikeInfoDetails }) => {

    const { category_name, img, product_name, location, original_price, resale_price, years_of_use, posted_date, milage, condition, seller_name, brand_logo, category_id } = details

    // Each card will have a    the seller's name;

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
                        <p className='text-lg'>Seller <span className='text-blue-600'>{seller_name}</span></p>
                    </div>
                </div>
                <div>
                    <img src={img} alt="" className="object-cover w-full mb-4 h-[250px] bg-gray-500 rounded-lg" />
                    <div className='flex justify-between items-center'>
                        <h2 className="mb-1 text-xl font-semibold">Brand: {category_name}</h2>
                        <h2 className="mb-1 text-xl font-semibold text-blue-700">Model : {product_name}</h2>
                    </div>
                    <div className='flex flex-wrap justify-between'>
                        <h2 className='text-lg'>Original Price: {original_price} Taka</h2>
                        <h2 className='text-lg'>Used {years_of_use} {years_of_use > 1 ? 'Years' : 'Year'}</h2>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center pb-4">
                    <div className="space-x-2">
                        <h2 className='text-lg text-orange-600'>Resale Price: {resale_price} Taka</h2>
                    </div>
                    <div className="flex text-sm  bg-green-700 text-white px-4 rounded-md py-1">
                        <ImLocation className='my-auto text-xl mr-1'></ImLocation>
                        <h2 className='text-lg'> {location}</h2>
                    </div>
                </div>

                <div className='mx-auto'>
                    {/* <button className='bg-blue-800 px-12 py-2 rounded-md btn'>Book Now</button> */}

                    {/* Modal Button */}
                    <label
                        onClick={() => setBikeInfoDetails(details)}
                        htmlFor="product-booking" className="bg-blue-800 px-12 py-2 rounded-md btn">Book Now
                    </label>

                </div>
            </div>

        </div>

    );
};

export default BikeDetailsCard;