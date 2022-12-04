import React, { useContext, useState } from 'react';
import image from '../../../images/LoginImage/signup.webp';
import image2 from '../../../images/LoginImage/signup-nobg.png';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useToken from '../../../Hooks/useToken';
import useTitle from '../../../Hooks/useTitle';
import { BsEye } from 'react-icons/bs';
import { BsEyeSlash } from 'react-icons/bs';




const Login = () => {

    const [loginError, setLoginError] = useState('')

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { userLogin, googleSignIn, resetPassword, user, loading, setLoading } = useContext(AuthContext);

    const [userEmail, setUserEmail] = useState('');


    useTitle('Login')


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


    //for verifying the token
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    
    //visible the password
    const [visiblePassword, setVisiblePassword] = useState(false);


    // if(token){
    //     // Swal.fire(
    //     //     'Nice',
    //     //     'User Logged In After verifying the token',
    //     //     'success'
    //     // )
    //     //toast.success(`Welcome to Best Bikes, ${user?.displayName}`)
    //     console.log("Token From Login Page: ", token)
    //     navigate(from, { replace: true });
    // }



    const handleLogin = (data) => {
        setLoginError('');
        setUserEmail(data.email)
        console.log("Login Page Email: ", data.email)

        userLogin(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log("User From Login Page", user);
                //setLoginUserEmail(user.email);

                const currentUser = {
                    email: user?.email
                }
                //get jwt token in client side
                fetch('https://best-bikes-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        console.log("Token received from server side", data.token)
                        //set the JWT token in local storage
                        localStorage.setItem('bestBikeToken', data.token);
                        navigate(from, { replace: true });

                    })

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


    const handleForgotPassword = () => {

        if (!userEmail) {
            Swal.fire({
                icon: 'error',
                title: 'To Reset Password',
                text: 'You must provide your email',
            })
            return;
        }
        setLoginError('');

        resetPassword(userEmail)
            .then(() => {
                Swal.fire(
                    'Hello!',
                    `Password reset link has been sent to your email ${userEmail}. Please check your email`,
                    'success'
                )
            })
            .catch(error => {
                toast.error(error.message);
                console.log(error);
            })

    }





    return (
        <div className='flex-col lg:flex-row-reverse grid md:grid-cols-2'>

            <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}

                className="text-center lg:text-left">
                <img className='w-full mt-12' src={image2} alt="" />
            </motion.div>

            <div className='mt-8 flex justify-center items-center'>
                <div className='p-6 border-2 rounded-xl  w-full max-w-md shadow-2xl  sm:w-3/4  lg:w-full md:w-full  md:mx-2 lg:mx-0 sm:mx-2 mx-2 dark:bg-gray-900 dark;border-2 dark:border-green-700'>
                    <h2 className='text-2xl text-center font-bold uppercase'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control w-full mb-2 ">
                            <label className="label ">
                                <span className="label-text dark:text-white">Email</span>
                            </label>

                            <input name="email" type="email" {...register("email", { required: "Email is Required" })}
                                placeholder="Enter Email" className="input input-bordered w-full dark:text-black" />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text dark:text-white">Password</span>
                            </label>

                            <input type={visiblePassword ? 'text' : 'password'} {...register("password", { required: "Password is Required", minLength: { value: 8, message: 'Password must be 8 characters or longer' } })} placeholder="Enter Password" className="input input-bordered w-full dark:text-black  " />

                            <div className='flex justify-end -mt-8 mr-3'>
                                {
                                    !visiblePassword ?
                                    <BsEyeSlash onClick= {() => setVisiblePassword(!visiblePassword)} className=''></BsEyeSlash>
                                    :
                                    <BsEye onClick= {() => setVisiblePassword(!visiblePassword)} className=''></BsEye>
                                }
                            </div>

                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        </div>

                        <label onClick={handleForgotPassword} className="label mb-6 mt-4">
                            <span className="label-text text-blue-600 font-semibold dark:text-white dark:hover:text-blue-700">Forget Password?</span>
                        </label>

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
                        <button onClick={handleSignInByGoogle} className='btn btn-outline  uppercase w-full dark:bg-black dark:text-white dark:border-green-600'> <FcGoogle className='text-2xl mr-2'></FcGoogle> Continue with google</button>
                    </div>



                </div>
            </div>

        </div>
    );
};

export default Login;