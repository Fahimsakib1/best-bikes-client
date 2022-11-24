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
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        {/* <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li> */}

                        {
                            isSeller &&
                            <>
                                <Link to='/dashboard/addProducts'><button className='btn btn-md btn-ghost  border-0 text-lg text-green-700  font-semibold'><BsPlusCircle className='text-2xl mr-2'></BsPlusCircle>Add A Product</button></Link>

                                <Link to='/dashboard/myProducts'><button className='btn btn-md btn-ghost border-0 text-lg text-green-700 font-semibold'><FaShoppingBag className='text-2xl mr-2'></FaShoppingBag>My Products</button></Link>

                            </>
                        }

                        {
                            isBuyer &&
                            <>
                                <Link to='/dashboard/myOrders'><button className='btn btn-md btn-ghost  border-0 text-lg text-blue-700 font-semibold'><FaShoppingBag className='text-2xl mr-2'></FaShoppingBag>My Orders</button></Link>
                            </>
                        },


                        {
                            isAdmin &&
                            <>
                                <Link to='/dashboard/allSellers'><button className='btn btn-md btn-ghost  border-0 text-lg text-purple-700 font-semibold mb-1'> <BsPeopleFill className='text-2xl mr-2'></BsPeopleFill> All Sellers</button></Link>

                                <Link to='/dashboard/allBuyers'><button className='btn btn-md btn-ghost  border-0 text-lg text-purple-700 font-semibold '><BsPeopleFill className='text-2xl mr-2'></BsPeopleFill> All Buyers</button></Link>

                                <Link to='/dashboard/allBuyers'><button className='btn btn-md btn-ghost  border-0 text-lg text-red-700 font-semibold '><MdReport className='text-2xl mr-2'></MdReport> Reported Items</button></Link>
                            </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;