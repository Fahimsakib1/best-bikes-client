import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineWavingHand } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../images/Logo/Logo1.png';




const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.error(error.message))

    }




    const menuItems = <React.Fragment>

        <li className=''><Link to='/'>Home</Link></li>
        <li className=''><Link to='/appointment'>Appointment</Link></li>
        <li className=''><Link to='/review'>Review</Link></li>

        {/* {
            user?.uid ?
                <>
                    {
                        user?.uid &&
                        <div className='flex'>
                            <p className='text-md text-blue-600 block lg:hidden'>Hello, {user.displayName ? user.displayName : user.email}
                            </p>
                            <MdOutlineWavingHand className='text-2xl text-green-600 ml-2 lg:hidden'></MdOutlineWavingHand>
                        </div>
                    }

                    <li className='dark:text-white dark:hover:text-orange-500'><Link to='/dashboard'>Dashboard</Link></li>

                    <li className='text-red-600 font-bold'><button onClick={handleLogOut} className='bg-red-600 text-white rounded-lg'>Sign Out</button></li>

                </>
                :
                <>
                    <li className='font-bold'><Link to='/login' className='bg-green-600 text-white rounded-lg lg:mr-2'>Login</Link></li>
                    <li className='font-bold'><Link to='/signup' className='bg-blue-700 text-white rounded-lg sm:mt-2 md:mt-2 lg:mt-0 mt-2'>Signup</Link></li>
                </>
        } */}


    </React.Fragment>


    return (

        <div>
            <div className="navbar  flex justify-between  pb-6 bg-base-200">

                <div className="navbar-start w-[400px]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {menuItems}
                        </ul>
                    </div>

                    <div className="avatar">
                        <div className="w-16 mt-6 ml-4">
                            <img className='rounded-lg' src={logo} alt="logo" />
                        </div>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-4xl text-blue-800  mt-6" href='/'>Best Bikes</Link>
                </div>


                <div className='hidden lg:block'>
                    {/* {
                        user?.uid && <div className='flex'>
                            <p className='text-3xl text-green-600 font-semibold'>Hello, {user.displayName ? user.displayName : user.email} </p>
                            <MdOutlineWavingHand className='text-3xl text-green-600 mt-1 ml-2'></MdOutlineWavingHand>
                        </div>

                    } */}
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 mt-6">
                        {menuItems}
                    </ul>
                </div>

                {/* dashboard er toggle button */}
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>

            </div>
        </div>
    );
};

export default Header;