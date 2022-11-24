import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useBuyer from '../Hooks/useBuyer';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';




const DashboardLayout = () => {

    const { user } = useContext(AuthContext);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

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
                                <Link to='/dashboard/addProducts'><button className='btn btn-md btn-ghost  border-0'>Add a Product</button></Link>

                                <Link to='/dashboard/myProducts'><button className='btn btn-md btn-ghost border-0 '>My Products</button></Link>

                            </>
                        }

                        {
                            isBuyer &&
                            <>
                                <Link to='/dashboard/myOrders'><button className='btn btn-md btn-ghost  border-0'>My Orders</button></Link>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;