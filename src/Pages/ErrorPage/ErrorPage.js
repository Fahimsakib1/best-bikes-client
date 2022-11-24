import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import errorImage from '../../images/Error/error-no-bg.png';



const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 text-black mt-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 mb-56">
                    <div className="max-w-md text-center">
                        {/* <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2> */}
                        <div className='flex justify-center gap-x-10 flex-col sm:flex-col md:flex-row'>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.2 }}
                                animate={{ opacity: 1, scale: 1.7 }}
                                transition={{ duration: 0.8 }}
                            >
                                <img className='' src={errorImage} alt="" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.2 }}
                                animate={{ opacity: 1, scale: 1.2 }}
                                transition={{ duration: 0.8 }}

                                className='flex justify-center my-auto'>
                                <p className='mb-8 font-extrabold text-9xl text-red-600'>4</p>
                                <div className="h-20 w-20 border-8 border-dashed rounded-full animate-spin border-red-600 my-auto mx-2"></div>
                                <p className='mb-8 font-extrabold text-9xl text-red-600'>4</p>
                            </motion.div>
                        </div>
                        <p className="text-2xl font-semibold md:text-3xl text-red-600">Oops... This Page is Not Available In This Website.</p>
                        <p className="mt-4 mb-8 text-black text-semibold text-lg">It seems that you are visiting a route which is not available in this website. Try to visit the correct routes</p>
                        <div>
                            <Link to='/'><button className='btn btn-primary'>Back to Homepage</button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;