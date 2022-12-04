import React from 'react';
import pic1 from '../../../images/Brand-Bikes/bajaj.png';
import pic2 from '../../../images/Brand-Bikes/ktm.jpg';
import pic3 from '../../../images/Brand-Bikes/suzuki.jpg';
import pic4 from '../../../images/Brand-Bikes/yamaha2.jpg';
import pic5 from '../../../images/Brand-Bikes/yamaha.jpeg';
import { motion } from 'framer-motion'; 

const Brands = () => {
    return (
        <div className='my-24'>
            <h2 className='md:text-5xl lg:text-5xl font-semibold text-blue-600 sm:text-4xl text-3xl text-center'>Gallery</h2>

            <section className="py-6  text-gray-50 dark:sm:mx-4 dark:md:mx-4 dark:lg:mx-10 sm:mx-4 md:mx-2 lg:mx-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
                    <img src={pic4} alt="" className="w-full h-full col-span-2 row-span-2 rounded-md shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl" />
                    <img alt="" className="w-full h-full rounded-md shadow-sm min-h-48 bg-gray-500 aspect-square transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl" src={pic2} />
                    <img alt="" className="w-full h-full rounded-md shadow-sm min-h-48 bg-gray-500 aspect-square transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl" src={pic3} />
                    <img alt="" className="w-full h-full rounded-md shadow-sm min-h-48 bg-gray-500 aspect-square transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl" src={pic1} />
                    <img alt="" className="w-full h-full rounded-md shadow-sm min-h-48 bg-gray-500 aspect-square transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:rounded-xl" src={pic5} />

                </motion.div>
            </section> 
        </div>
    );
};

export default Brands;


