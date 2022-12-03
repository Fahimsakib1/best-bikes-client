import React from 'react';
import price  from '../../../images/Offerings/price.png';
import quality from '../../../images/Offerings/quality.jpeg';
import brand from '../../../images/Offerings/brands1.jpg'

const Offerings = () => {
    return (
        <div>
            
            <h2 className='md:text-5xl lg:text-5xl font-semibold text-blue-600 sm:text-4xl text-3xl text-center mt-24 mb-8'>Our Commitments</h2>

            <section className="p-4 lg:p-8 bg-gray-200 text-gray-100 rounded-lg dark:w-[1400px] dark:mx-auto dark:bg-gray-700">
                <div className="container mx-auto space-y-8">
                    
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={price} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-green-500">Best Pricing</h3>
                            <p className="my-6 text-gray-400 text-xl">We are dedicated to our users. We provide the minimum pricing among all the available bike brands. You can check out and justify. Price will never be a concern with us if you want to purchase bikes from us</p>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <img src={quality} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold text-green-500">Best Quality Bikes</h3>
                            <p className="my-6 text-gray-400 text-xl">Though we sell used bikes, but our bikes are very good in quality. We never compromise in quality. We can easily be trusted in terms of quality. One one has ever complained about our bike's quality</p>
                        </div>
                    </div>

                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <img src={brand} alt="" className="h-80 bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 bg-gray-900">
                            <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl  font-semibold text-green-500">Best Brands</h3>
                            <p className="my-6 text-gray-400 text-xl"> We are dealing with 50+ brands. Customers can choose with his own interest. We got plenty of collections of bikes of the best brands in the world. We care our customers and try to provide them the exact bikes they wanted to buy.</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    ); 
};

export default Offerings;