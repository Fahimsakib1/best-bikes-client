import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import image from '../../../images/LoginImage/signup-nobg.png';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SmallSpinner from '../../../components/Spinners/SmallSpinner';
import useToken from '../../../Hooks/useToken';
import useTitle from '../../../Hooks/useTitle';






const Signup = () => {

    const { createUser, updateUser, googleSignIn, loading, setLoading } = useContext(AuthContext)

    const [error, setError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_key
    //console.log("Image BB Key From Sign Up Page", imageHostKey);


    useTitle('Signup')




    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    if (token) {
        navigate('/');
        console.log("token from sign up page: ", token)
    }





    const handleSignup = (data) => {
        console.log(data);
        setError('');

        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    //console.log(imageData.data.url)
                    createUser(data.email, data.password)
                        .then(result => {
                            const userInfo = {
                                displayName: data.name,
                                photoURL: imageData.data.url
                            }
                            updateUser(userInfo)
                            .then( () => {
                                addUserToDataBase(data.name, data.email, data.accountType, imageData.data.url )
                                toast.success("User Created Successfully")
                                const user = result.user;
                                console.log("User from Sign Up Page After Update Name and Photo Upload", user);
                                reset();
                                //navigate('/login')
                            })
                            .catch(error => {
                                toast.error("User name Update Failed")
                                setError(error.message)
                            })

                        })

                        .catch(error => {
                            toast.error(error.message)
                            setError(error.message)
                        })
                }
            })


    }




    // const handleSignup = (data) => {
    //     console.log(data);
    //     setError('');
    //     createUser(data.email, data.password)
    //         .then(result => {

    //             // const user = result.user;
    //             // console.log("User from Sign Up Page", user)
    //             //toast.success("User Created Successfully")

    //             const userInfo = {
    //                 displayName: data.name
    //             }

    //             updateUser(userInfo)
    //                 .then(() => {
    //                     //addUserToDataBase(data.name, data.email, data.accountType)
    //                     toast.success("User Created Successfully")
    //                     const user = result.user;
    //                     console.log("User from Sign Up Page After Update Name", user);
    //                     reset();
    //                     //navigate('/login')
    //                 })

    //                 .catch(error => {
    //                     console.error(error);
    //                     setError(error.message);
    //                     toast.error("User name Update Failed")
    //                 })

    //         })

    //         .catch(error => {
    //             toast.error(error.message)
    //             setError(error.message)
    //         })
    // }




    const handleSignInByGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log("User Sign in By Google", user);
                toast.success("Successfully Sign In By Google");
                addUserToDataBase(user.displayName, user.email, 'Buyer', user?.photoURL)
            })

            .catch(error => {
                toast.error("Google Sign In Failed")
                setError(error.message)
            })
    }



    const addUserToDataBase = (name, email, role, photo) => {
        const user = { name: name, email: email, role: role, photo: photo };

        fetch('https://best-bikes-server.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setCreatedUserEmail(email)
                    //getUserToken(email)
                }
                else {

                    Swal.fire({
                        icon: 'error',
                        title: `${data.message}`,
                        text: 'Please Sign Up with a new Email'
                    })

                }
            })
    }



    //function for set token after successful sign up
    // const getUserToken = (email) => {
    //     fetch(`https://best-bikes-server.vercel.app/jwt?email=${email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.accessToken){
    //             localStorage.setItem('bestBikeToken', data.accessToken)
    //             navigate('/');
    //         }
    //     })
    // }





    return (
        <div className='flex-col lg:flex-row-reverse grid md:grid-cols-2'>

            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}

                className="text-center lg:text-left">
                <img className='w-full mt-4' src={image} alt="" />
            </motion.div>

            <div className='mt-4 flex justify-center items-center  '>
                <div className='p-6 border-2 rounded-xl  w-full max-w-md shadow-2xl  sm:w-3/4  lg:w-full md:w-full  mx-2 sm:mx-2 md:mx-2 lg:mx-0 dark:border-green-700 dark:bg-gray-900'>
                    <h2 className='text-2xl text-center font-bold uppercase'>Sign up</h2>

                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div className="form-control w-full mb-1">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Name</span>
                            </label>

                            <input type="text" {...register("name", { required: "Name is Required" })}
                                placeholder="Enter Name" className="input input-bordered w-full dark:text-black" />

                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                        </div>


                        <div className="form-control w-full mb-1">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Email</span>
                            </label>

                            <input type="email" {...register("email", { required: "Email is Required" })}
                                placeholder="Enter Email" className="input input-bordered w-full dark:text-black" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>


                        <div className='flex justify-between items-center gap-x-6'>
                            <div className="form-control w-full mb-1">
                                <label className="label">
                                    <span className="label-text font-semibold dark:text-white">Password</span>
                                </label>

                                <input type="password" {...register("password", {
                                    required: "Password is Required",
                                    minLength: { value: 8, message: 'Password must be 8 characters or longer' },
                                    // pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password Should Contain at least 1 A-Z, 0-9 and [!@#$&*] character " }
                                })} placeholder="Enter Password" className="input input-bordered w-full dark:text-black" />

                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                            </div>

                            <div className="form-control w-full mb-1">
                                <label className="label">
                                    <span className="label-text font-semibold dark:text-white">Choose Account Type</span>
                                </label>

                                <select
                                    type="text"
                                    {...register("accountType", { required: "Account Type is Required" })}
                                    name='accountType' className="select select-bordered w-full dark:text-black">
                                    <option value='Buyer'>Buyer</option>
                                    <option value='Seller'>Seller</option>
                                </select>

                                {errors.accountType && <p className='text-red-600'>{errors.accountType?.message}</p>}

                            </div>
                        </div>

                        <div className='form-control w-full mb-1 mx-auto'>
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Upload Photo</span>
                            </label>
                            <input type="file" {...register("photo", { required: "Photo is Required" })}
                                placeholder="Upload Product Photo" className="input  w-full pt-2 text-black" />

                            {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                        </div>



                        {
                            error && <p className='text-red-600'>{error}</p>
                        }


                        <input type="submit"
                            value='Sign up'
                            className='btn btn-primary w-full text-white uppercase py-3 rounded-md mt-4' />

                    </form>

                    <div className='mt-3'>
                        <p className='text-sm text-center font-semibold'>Already Have An Account ? <Link to='/login' className='text-blue-600 font-semibold'>Please Login</Link></p>
                    </div>

                    <div className="divider">OR</div>

                    <div>
                        <button onClick={handleSignInByGoogle} className='btn btn-outline btn-dark uppercase w-full dark:bg-black dark:text-white dark:border-green-600'> <FcGoogle className='text-2xl mr-2'></FcGoogle> Continue with google</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Signup;