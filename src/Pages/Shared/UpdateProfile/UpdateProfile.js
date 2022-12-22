import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/useTitle';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../Spinners/LoadingSpinner';
import AOS from 'aos';
import 'aos/dist/aos.css';




const UpdateProfile = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])

    
    
    useTitle('Profile Update');

    const { user, updateUser } = useContext(AuthContext);
    console.log("User From Update Profile Page", user)

    const [error, setError] = useState('');

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const imageHostKey = process.env.REACT_APP_imagebb_key
    console.log("Image BB Key From Update Profile Page", imageHostKey);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const [loading, setLoading] = useState(false);

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }







    const handleUpdateUserProfile = (data) => {
        console.log(data.name, data.email, data.photo);
        setError('');
        setLoading(true);

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
                    
                    const userInfo = {
                        displayName: data.name,
                        photoURL: imageData.data.url 
                    }
                    updateUser(userInfo)
                        .then(() => {
                            updateProfileInfoToDataBase(data.name, imageData.data.url )
                            //toast.success("Information Updated Successfully")
                            reset();
                        })
                        .catch(error => {
                            toast.error("Profile Update Failed")
                            setError(error.message)
                        })
                }
            })
            .catch(error => {
                toast.error("Cant Process Image")
                setError(error.message)
            })

    }


    const updateProfileInfoToDataBase = (name, photo) => {
        
        const updateUserInfo = { name: name, photo: photo };
        const email = user.email;
        console.log("Email ..... ", email);

        fetch(`https://best-bikes-server.vercel.app/users?email=${user?.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Information Updated and sent to Database Successfully");
                    navigate('/dashboard');
                    // navigate(from, { replace: true });
                    setLoading(false);
                }

                else {

                    Swal.fire({
                        icon: 'error',
                        title: `${data.message}`,
                        text: 'Try Again'
                    })
                    setLoading(false);

                }
            })

    }



    return (
        <div>
            <div className='mt-4 flex justify-center items-center  '>
                <div className='p-6 border-2 rounded-xl  w-full max-w-md shadow-2xl  sm:w-3/4  lg:w-full md:w-full  mx-2 sm:mx-2 md:mx-2 lg:mx-0 dark:border-green-700 dark:bg-gray-900 mt-20 animation' data-aos='fade-up'>
                    <h2 className='text-2xl text-center font-bold uppercase'>Update Profile</h2>

                    <form onSubmit={handleSubmit(handleUpdateUserProfile)} className='' >

                        <div className="form-control w-full mb-1">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Name</span>
                            </label>

                            <input defaultValue={user?.displayName} type="text" {...register("name")}
                                placeholder="Enter Name" className="input input-bordered w-full dark:text-black font-bold" />

                            {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}

                        </div>


                        <div className="form-control w-full mb-1">
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Email</span>
                            </label>

                            <input defaultValue={user?.email} readOnly type="email" {...register("email")}
                                placeholder="Enter Email" className="input input-bordered w-full text-gray-500 font-bold" title='You Cant Update Email' />

                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}

                        </div>


                        <div className='form-control w-full mb-1 mx-auto'>
                            <label className="label">
                                <span className="label-text font-semibold dark:text-white">Upload Photo</span>
                            </label>
                            <input type="file" {...register("photo")}
                                placeholder="Upload Product Photo" className="input  w-full pt-2 text-black" required/>

                            {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}
                        </div>



                        {
                            error && <p className='text-red-600'>{error}</p>
                        }


                        <input type="submit"
                            value='Update'
                            className='btn btn-primary w-full text-white uppercase py-3 rounded-md mt-4 dark:bg-black dark:text-white dark:border-green-600 dark:hover:bg-gray-900' />

                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;