import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';




const AddProducts = () => {

    useTitle('Add Products (Seller)');
    
    const { user } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_key
    //console.log("Image BB Key", imageHostKey);



    



    const handleAddProduct = (data) => {
        //console.log(data);
        const image = data.photo[0];
        const formData = new FormData();
        formData.append('image', image);

        //code for getting the review date
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const currentTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        const MonthDateYear = [month, day, year].join('-');
        const reviewDate = MonthDateYear + ' ' + currentTime
        //console.log("Date", reviewDate);

    
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                //console.log(imageData);
                if (imageData.success) {
                    //console.log(imageData.data.url)
                    
                    const productInfo = {
                        category_id: data.brand,
                        condition: data.condition,
                        description: data.description,
                        location: data.location,
                        mobile: data.mobileNumber,
                        original_price: data.originalPrice,
                        resale_price: data.resalePrice,
                        product_name: data.productName,
                        years_of_use: data.usingYear,
                        seller_name: user?.displayName || 'User Name not Added',
                        email: user?.email || 'Unregistered User',
                        posted_date: reviewDate,
                        img: imageData.data.url,
                        category_name: data.brand === '1' ? 'Yamaha' : data.brand === '2' ? 'Bajaj' : 'Suzuki',
                        availableStatus : 'Available'
                    }

                    fetch('https://best-bikes-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productInfo)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                Swal.fire(
                                    'Good',
                                    `Product Added Successfully By Seller ${user?.displayName}`,
                                    'success'
                                )
                                navigate('/dashboard/myProducts')
                                reset();
                            }

                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: `${result.message}`,
                                    text: 'Try Again Properly'
                                })
                            }
                        })


                }

            })
    }





    return (
        <div>
            
            <div className=''>
                <h1 className='text-3xl text-center mt-8'>Add Product</h1>
                <div className='mt-4 flex justify-start items-center lg:mx-0 md:mx-0 sm:mx-2 mx-2 '>
                    <div className='w-[700px] p-2 sm:p-2 md:p-6 lg:p-6 border-2  mx-auto bg-gray-900 dark:bg-gray-900 rounded-xl dark:border-green-600 mb-12'>

                        <form onSubmit={handleSubmit(handleAddProduct)}>

                            <div className='flex justify-between gap-3'>
                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Product Name</span>
                                    </label>

                                    <input name="productName" type="text" {...register("productName", { required: "Product Name  Required" })}
                                        placeholder="Enter Product Name" className="input input-bordered border-black w-full text-black" />

                                    {errors.productName && <p className='text-red-600'>{errors.productName?.message}</p>}

                                </div>


                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Original Price</span>
                                    </label>

                                    <input name="originalPrice" type="text" {...register("originalPrice", { required: "Price Required" })}
                                        placeholder="Enter Product Price" className="input input-bordered border-black w-full text-black" />

                                    {errors.originalPrice && <p className='text-red-600'>{errors.originalPrice?.message}</p>}

                                </div>

                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Resale Price</span>
                                    </label>

                                    <input name="resalePrice" type="text" {...register("resalePrice", { required: "Resale Price Required" })}
                                        placeholder="Enter Resale Price" className="input input-bordered border-black w-full text-black" />

                                    {errors.resalePrice && <p className='text-red-600'>{errors.resalePrice?.message}</p>}

                                </div>

                            </div>


                            <div className='flex justify-between gap-3'>

                                <div className="form-control w-full mb-3">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Location</span>
                                    </label>

                                    <select
                                        type="text"
                                        {...register("location", { required: "Location Required" })}

                                        name='location' className="select select-bordered border-black w-full text-black">

                                        <option value='Dhaka'>Dhaka</option>
                                        <option value='Chittagong'>Chittagong</option>
                                        <option value='Rajshahi'>Rajshahi</option>
                                        <option value='Sylhet'>Sylhet</option>
                                        <option value='Khulna'>Khulna</option>
                                        <option value='Dinajpur'>Dinajpur</option>


                                    </select>

                                    {errors.location && <p className='text-red-600'>{errors.location?.message}</p>}

                                </div>

                                <div className="form-control w-full mb-3">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Brand</span>
                                    </label>

                                    <select
                                        type="text"
                                        {...register("brand", { required: "Brand  Required" })}
                                        name='brand' className="select select-bordered border-black w-full text-black">
                                        <option value='1'>Yamaha</option>
                                        <option value='2'>Bajaj</option>
                                        <option value='3'>Suzuki</option>
                                    </select>

                                    {errors.brand && <p className='text-red-600'>{errors.brand?.message}</p>}

                                </div>

                                <div className="form-control w-full mb-3">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Condition</span>
                                    </label>

                                    <select
                                        type="text"
                                        {...register("condition", { required: "Condition  Required" })}
                                        name='condition' className="select select-bordered border-black w-full text-black">
                                        <option value='Excellent'>Excellent</option>
                                        <option value='Good'>Good</option>
                                        <option value='Fair'>Fair</option>
                                    </select>

                                    {errors.condition && <p className='text-red-600'>{errors.condition?.message}</p>}

                                </div>

                            </div>



                            <div className='flex justify-between gap-3'>

                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Years Of Using</span>
                                    </label>

                                    <input name="usingYear" type="text" {...register("usingYear", { required: "Using Year Required" })}
                                        placeholder="Years Of Using" className="input input-bordered border-black w-full text-black" />

                                    {errors.usingYear && <p className='text-red-600'>{errors.usingYear?.message}</p>}

                                </div>

                                <div className="form-control w-full mb-2">
                                    <label className="label">
                                        <span className="label-text font-semibold text-white">Mobile</span>
                                    </label>

                                    <input name="mobileNumber" type="text" {...register("mobileNumber", { required: "Mobile Number Required" })}
                                        placeholder="Mobile Number" className="input input-bordered border-black w-full text-black" />

                                    {errors.mobileNumber && <p className='text-red-600'>{errors.mobileNumber?.message}</p>}

                                </div>

                            </div>



                            <div>
                                <textarea  {...register("description", { required: "Description is Required" })} className="textarea textarea-bordered border-black w-full h-24 mt-4 text-black" placeholder="Product Description"></textarea>
                            </div>

                            <div className="form-control w-full mb-4">
                                <label className="label">
                                    <span className="label-text font-semibold ml-4 text-white">Upload Photo</span>
                                </label>

                                <input type="file" {...register("photo", { required: "Photo is Required" })}
                                    placeholder="Upload Product Photo" className="input  w-full pt-2" />

                                {errors.photo && <p className='text-red-600'>{errors.photo?.message}</p>}

                            </div>


                            {
                                error && <p className='text-red-600'>{error}</p>
                            }

                            <div className='mx-auto text-center dark:mb-4'>
                                <input type="submit"
                                    value='Add Product'
                                    className=' bg-blue-700  hover:bg-blue-700 w-1/2  text-white uppercase py-3 rounded-md  mt-1 border-0  dark:bg-black dark:border-green-600 dark:border-2' 
                                />
                            </div>


                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;