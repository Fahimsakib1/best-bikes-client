import React, { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';
import { BsPeopleFill } from 'react-icons/bs';
import { FaShoppingBag } from 'react-icons/fa';
import { BsPlusCircle } from 'react-icons/bs';
import { MdReport } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { FaHistory } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const DashboardLayout = () => {

    const { user } = useContext(AuthContext);

    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    }, [])




    return (

        <div>
            <Header></Header>
            <div className="drawer drawer-mobile ">
                <input id="new-dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="new-dashboard-drawer" className="drawer-overlay "></label>
                    <ul className="menu p-4 w-80  text-base-content  dark:text-white bg-gray-800 dark:glass ">

                        {
                            isSeller &&
                            <>
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        {/* <img src={user?.photoURL} alt='userPicture' /> */}
                                        <PhotoProvider>
                                            <PhotoView src={user?.photoURL}>
                                                <img src={user?.photoURL} alt="" />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </div>

                                    <div className=' rounded-xl bg-green-600 w-[15px] h-[5px] py-2 -ml-1'>

                                    </div>
                                </div>

                                <Link to='/dashboard/addProducts'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md  border-0 text-[15px] text-white  font-semibold  mt-2'><BsPlusCircle className='text-xl mr-2'></BsPlusCircle>Add New Products</button></Link>

                                <Link to='/dashboard/myProducts'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><FaShoppingBag className='text-xl mr-2'></FaShoppingBag>My Products</button></Link>

                                <Link to='/dashboard/updateProfile'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><ImProfile className='text-xl mr-2'></ImProfile>Update Profile</button></Link>

                            </>
                        }

                        {
                            isBuyer &&
                            <>
                                <div className="avatar">
                                    <div className="w-20 rounded-full">
                                        {/* <img src={user?.photoURL} alt='userPicture' /> */}
                                        <PhotoProvider>
                                            <PhotoView src={user?.photoURL}>
                                                <img src={user?.photoURL} alt="" />
                                            </PhotoView>
                                        </PhotoProvider>
                                    </div>

                                    <div className=' rounded-xl bg-green-600 w-[15px] h-[5px] py-2 -ml-1'>

                                    </div>
                                </div>

                                <Link to='/dashboard/myOrders'><button className='bg-blue-800 hover:bg-blue-800  btn btn-md  border-0 text-[15px] text-white font-semibold mt-4'><FaShoppingBag className='text-xl mr-2'></FaShoppingBag>My Orders</button></Link>

                                <Link to='/dashboard/updateProfile'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><ImProfile className='text-xl mr-2'></ImProfile>Update Profile</button></Link>

                                <Link to='/dashboard/paymentHistory'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><FaHistory className='text-xl mr-2'></FaHistory>Stripe Payment History</button></Link>

                            </>
                        }


                        {
                            isAdmin &&
                            <>
                                <div className="avatar mb-4">
                                    <div className="w-20 rounded-full">
                                        {/* <img src={user?.photoURL} alt='userPicture' /> */}
                                        <PhotoProvider>
                                            <PhotoView src={user?.photoURL}>
                                                <img className='animation' data-aos='flip-left' src={user?.photoURL} alt="" />
                                            </PhotoView>
                                        </PhotoProvider>
                                        
                                    </div>

                                    <div className=' rounded-xl bg-green-600 w-[15px] h-[5px] py-2 -ml-1'>

                                    </div>
                                </div>

                                <Link to='/dashboard/allSellers'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md  border-0 text-[15px] text-white font-semibold'> <BsPeopleFill className='text-xl mr-2'></BsPeopleFill> All Sellers</button></Link>

                                <Link to='/dashboard/allBuyers'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md   border-0 text-[15px] text-white font-semibold mt-4'><BsPeopleFill className='text-xl mr-2'></BsPeopleFill> All Buyers</button></Link>

                                <Link to='/dashboard/updateProfile'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><ImProfile className='text-xl mr-2'></ImProfile>Update Profile</button></Link>

                                <Link to='/dashboard/allUsers'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md border-0 text-[15px] text-white font-semibold mt-4 '><HiUserGroup className='text-xl mr-2'></HiUserGroup>Registered Users</button></Link>

                                <Link to='/dashboard/reportedItems'><button className='hover:bg-red-600 hover:text-white btn btn-sm bg-red-600 border-0 text-[15px] text-white mt-4 font-semibold '><MdReport className='text-xl mr-2'></MdReport> Reported Items</button></Link>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;