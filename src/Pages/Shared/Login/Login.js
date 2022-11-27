import React, { useContext, useState } from 'react';
import image from '../../../images/LoginImage/signup.webp';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useToken from '../../../Hooks/useToken';

const Login = () => {


    const [loginError, setLoginError] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { userLogin, googleSignIn, resetPassword, user, loading, setLoading } = useContext(AuthContext);

    //const [userEmail, setUserEmail] = useState('');


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    
    //for verifying the token
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if(token){
        Swal.fire(
            'Nice',
            'User Logged In After verifying the token',
            'success'
        )
        navigate(from, { replace: true });
    }



    const handleLogin = (data) => {
        setLoginError('');
        //setUserEmail(data.email)
        
        userLogin(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log("User From Login Page", user);
            setLoginUserEmail(data.email);
            reset();
            //navigate(from, { replace: true });
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login Failed',
            })
            setLoginError(error.message)
        })
    }




    const handleSignInByGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log("User Sign in By Google", user);
                setLoginUserEmail(user?.email);
                toast.success("Successfully Sign In By Google")
                //navigate(from, { replace: true });

            })
            .catch(error => {
                toast.error("Google Sign In Failed")
                setLoginError(error.message)
            })
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
                <div className='p-6 border-2 rounded-xl  w-full max-w-md shadow-2xl  sm:w-3/4  lg:w-full md:w-full  md:mx-2 lg:mx-0 sm:mx-2 mx-2'>
                    <h2 className='text-2xl text-center font-bold uppercase'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full mb-2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input name="email" type="email" {...register("email", { required: "Email is Required" })}
                                placeholder="Enter Email" className="input input-bordered w-full" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>

                            <input type="password" {...register("password", { required: "Password is Required", minLength: { value: 8, message: 'Password must be 8 characters or longer' } })} placeholder="Enter Password" className="input input-bordered w-full " />

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                            <label className="label mb-6">
                                <span  className="label-text hover:text-blue-600 font-semibold ">Forget Password?</span>
                            </label>


                        </div>

                        <input type="submit"
                        value='Login'
                        className='btn btn-primary w-full text-white uppercase py-3 rounded-md' />

                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </form>

                    <div className='mt-3'>
                        <p className='text-sm text-center font-semibold'>New to Best Bikes ? <Link to='/signup' className='text-blue-600 font-semibold'>Create New Account</Link></p>
                    </div>

                    <div className="divider">OR</div>

                    <div>
                        <button onClick={handleSignInByGoogle}  className='btn btn-outline btn-primary uppercase w-full'> <FcGoogle className='text-2xl mr-2'></FcGoogle> Continue with google</button>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Login;