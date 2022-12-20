import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';




const SSLPaymentFailPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 text-black mt-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 mb-56">
                    <div className="max-w-lg text-center">
                        <div className='flex justify-center gap-x-10 flex-col sm:flex-col md:flex-row'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.2 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                transition={{ duration: 0.8 }}

                                className='flex justify-center my-auto'>
                                {/* <p className='mb-8 font-extrabold text-9xl text-red-600'>O</p> */}
                                <div className="h-20 w-20 border-8 border-dashed rounded-full animate-spin border-red-600 my-auto mx-2"></div>
                                <div className="h-20 w-20 border-8 border-dashed rounded-full animate-spin border-red-600 my-auto mx-2"></div>
                                <p className='mb-8 font-semibold text-8xl text-red-600 mt-6'>P</p>
                                <p className='mb-8 font-semibold text-8xl text-red-600 mt-6'>S</p>
                            </motion.div>
                        </div>
                        <p className="text-2xl font-semibold md:text-2xl text-red-600 mt-4">Payment Cancelled... Something Went Wrong</p>
                        <div className='mt-4'>
                            <Link to='/'><button className='btn btn-primary'>Back to Homepage</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SSLPaymentFailPage;