import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';
import {BsPeopleFill} from 'react-icons/bs';
import {FaShoppingBag} from 'react-icons/fa';
import {BsPlusCircle} from 'react-icons/bs';
import {MdReport} from 'react-icons/md';




const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    const [isAdmin] = useAdmin(user?.email);

    return (
        
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="new-dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="new-dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64  text-base-content">

                        {
                            isSeller &&
                            <>
                                <Link to='/dashboard/addProducts'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md  border-0 text-lg text-white  font-semibold  mt-2'><BsPlusCircle className='text-2xl mr-2'></BsPlusCircle>Add A Product</button></Link>

                                <Link to='/dashboard/myProducts'><button className='bg-blue-800 hover:bg-blue-800 btn btn-md border-0 text-lg text-white font-semibold mt-4 '><FaShoppingBag className='text-2xl mr-2'></FaShoppingBag>My Products</button></Link>

                            </>
                        }

                        {
                            isBuyer &&
                            <>
                                <Link to='/dashboard/myOrders'><button className='bg-blue-800 hover:bg-blue-800  btn btn-md  border-0 text-lg text-white font-semibold mt-4'><FaShoppingBag className='text-2xl mr-2'></FaShoppingBag>My Orders</button></Link>
                            </>
                        },


                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboard/allSellers'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md  border-0 text-lg text-white font-semibold'> <BsPeopleFill className='text-2xl mr-2'></BsPeopleFill> All Sellers</button></Link>

                                <Link to='/dashboard/allBuyers'><button className='bg-blue-700 hover:bg-blue-800 btn btn-md   border-0 text-lg text-white font-semibold mt-4'><BsPeopleFill className='text-2xl mr-2'></BsPeopleFill> All Buyers</button></Link>

                                <Link to='/dashboard/reportedItems'><button className='hover:bg-red-600 hover:text-white btn btn-sm bg-red-600 border-0 text-lg text-white mt-4 font-semibold '><MdReport className='text-2xl mr-2'></MdReport> Reported Items</button></Link>
                            </>
                        }


                    </ul>

                </div>
            </div> 
        </div>
    );
};

export default DashboardLayout;