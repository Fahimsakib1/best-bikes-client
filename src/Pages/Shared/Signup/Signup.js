import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image from '../../../images/LoginImage/signup.webp';
import { motion } from 'framer-motion';






const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const [error, setError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();



    const handleSignup = (data) => {
        console.log(data);
    }



    return (
        <div className='flex-col lg:flex-row-reverse grid md:grid-cols-2'>

            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}

                className="text-center lg:text-left">
                <img className='w-full mt-12' src={image} alt="" />
            </motion.div>

            <div className='mt-8 flex justify-center items-center '>
                <div className='p-6 border-2 rounded-xl  w-full max-w-md shadow-2xl  sm:w-3/4 sm:mx-auto lg:w-full md:w-full md:mx-auto '>
                    <h2 className='text-2xl text-center mb-4 font-bold uppercase'>Sign up</h2>

                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>

                            <input type="text" {...register("name", { required: "Name is Required" })}
                                placeholder="Enter Name" className="input input-bordered w-full " />

                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                        </div>


                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>

                            <input type="email" {...register("email", { required: "Email is Required" })}
                                placeholder="Enter Email" className="input input-bordered w-full" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>


                        <div className="form-control w-full mb-6">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>

                            <input type="password" {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 8, message: 'Password must be 8 characters or longer' },
                                // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Should Contain at least 1 A-Z, 0-9 and [!@#$&*] character " }
                            })} placeholder="Enter Password" className="input input-bordered w-full " />

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        </div>

                        {
                            error && <p className='text-red-600'>{error}</p>
                        }

                        <input type="submit"
                            value='Sign up'
                            className='btn btn-accent w-full uppercase py-3 rounded-md' />

                        {/* <button type='submit' className='btn btn-accent w-full text-white uppercase py-3 rounded-md dark:bg-black dark:border-2 dark:border-green-600'>

                        {loading ? <SmallSpinner></SmallSpinner> : 'Sign up'}

                    </button> */}

                    </form>

                    <div className='mt-3'>
                        <p className='text-sm text-center font-semibold'>Already Have An Account ? <Link to='/login' className='text-secondary font-semibold'>Please Login</Link></p>
                    </div>

                    <div className="divider">OR</div>

                    {/* <div>
                    <button onClick={handleSignInByGoogle} className='btn btn-outline btn-accent uppercase w-full dark:bg-black dark:text-white'> <FcGoogle className='text-2xl mr-2'></FcGoogle> Continue with google</button>
                </div> */}

                </div>
            </div>

        </div>
    );
};

export default Signup;