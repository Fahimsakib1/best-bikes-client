import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import MyProductsCard from './MyProductsCard';
import bajajLogo from '../../../images/Brand-Logo/Bajaj1.png';
import yamahaLogo from '../../../images/Brand-Logo/Yamaha.jpg';
import suzukiLogo from '../../../images/Brand-Logo/suzuki1.webp';
import { SiSubstack } from 'react-icons/si';
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import DeleteProductModal from './DeleteProductModal';
import Swal from 'sweetalert2';
import {SiVerizon} from 'react-icons/si';
import toast from 'react-hot-toast';




const MyProducts = () => {

    const { user } = useContext(AuthContext);
    const [deleteProduct, setDeleteProduct] = useState(null);

    const closeModal = () => {
        setDeleteProduct(null);
    }


    const { data: myProducts = [], refetch, isLoading } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('bestBikeToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })


    if (isLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-700 mx-auto mt-64"></div>
    }


    const handleDeleteProduct = (id, name) => {
        //console.log('ID: ', id, 'Name:', name)

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('bestBikeToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    refetch();
                    Swal.fire(
                        'Done!',
                        `Product ${name} Deleted Successfully`,
                        'success'
                    )
                }

                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Can not Delete Product'
                    })
                }
            })
    }


    const handleAdvertiseProduct = (id, name) => {
        console.log(id);

        fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch();
                    // Swal.fire(
                    //     'Done!',
                    //     `Advertise of ${myProducts.product_name} Done`,
                    //     'success'
                    // )
                    toast.success(`Advertise of Bike ${name} Done`)
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops... Something Went Wrong',
                        text: 'Can not proceed advertising'
                    })
                }
            })

    }




    return (
        <div>

            <h1 className='text-center text-md sm:text-lg md:text-2xl my-6 bg-gray-800 text-white py-1 rounded-md mx-2 sm:mx-2 md:mx-4 lg:mx-0'>{user?.displayName} You Have Added {myProducts?.length} Products </h1>

            {/* <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 mt-4'>
                {
                    myProducts.map(product => <MyProductsCard key={product._id} product={product} handleDeleteProduct = {handleDeleteProduct}></MyProductsCard>)
                }
            </div> */}

            {
                myProducts.length > 0

                    ?

                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-12 mt-4'>
                        {
                            myProducts.map(product =>
                                <div key={product._id} className="rounded-md shadow-md sm:w-96 lg:w-80 md:w-80 bg-gray-900 text-gray-100 mb-10 sm:mb-10 md:mb-10 lg:mb-10 lg:mx-0 md:mx-4 sm:mx-4 mx-4 ">

                                    <div className="flex items-center justify-between p-3">
                                        <div className="flex items-center space-x-2">
                                            <img src={product.category_id === '1' ? yamahaLogo : product.category_id === '2' ? bajajLogo : suzukiLogo} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-gray-500 border-gray-700" />
                                            <div className="-space-y-1">
                                                <h2 className="text-sm font-semibold leading-none">Model: {product.product_name}</h2>
                                                <span className="inline-block text-xs leading-none text-gray-400">Posted: {product.posted_date}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <img src={product.img} alt="" className="object-cover object-center w-full h-72 bg-gray-500" />
                                    <div className="p-3">

                                        <div className='flex gap-x-2 items-center justify-between'>
                                            <p className='mb-1 text-blue-500'>Price: {product.resale_price} Taka</p>
                                            <div className='flex gap-x-2 items-center'>
                                                <SiSubstack className='text-orange-600'></SiSubstack>
                                                <p className='mb-1 '>{product.condition}</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between mt-2 mb-1">

                                            <div className="flex items-center space-x-3" >
                                                <label
                                                    onClick={() => setDeleteProduct(product)}
                                                    htmlFor="confirmation-modal"
                                                >
                                                    <FaTrashAlt className='text-2xl text-red-600' title='Delete Product'></FaTrashAlt>
                                                </label>

                                            </div>

                                            {
                                                product.advertiseStatus !== 'Advertised' ?
                                                    <button onClick={() => handleAdvertiseProduct(product._id, product.product_name)} type="button" title="Advertise Product" className="btn btn-xs border-0 bg-blue-800 hover:bg-blue-800 text-white">
                                                    Advertise
                                                    </button>
                                                :
                                                <button className ="btn btn-xs border-0 bg-green-800 hover:bg-green-800 text-white"><SiVerizon className = 'mr-1'></SiVerizon> Advertised</button>
                                            }
                                        </div>


                                    </div>
                                </div>

                            )
                        }
                    </div>

                    :

                    <div className=''>
                        <p className='text-5xl text-center mt-40 mb-2 text-gray-500 font-semibold'> No Product Available</p>
                        <p className='text-2xl text-center'>Want To Add Product? <Link to='/dashboard/addProducts' className='text-blue-600'>Click Here</Link></p>
                    </div>
            }



            {
                deleteProduct &&
                <DeleteProductModal
                    deleteProduct={deleteProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    closeModal={closeModal}
                >
                </DeleteProductModal>
            }




        </div>
    );
};

export default MyProducts;