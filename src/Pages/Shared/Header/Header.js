import React, { useContext } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineWavingHand } from 'react-icons/md';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import logo from '../../../images/Logo/Logo1.png';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';




const Header = () => {

    const { user, signOutUser, theme, ThemeChange } = useContext(AuthContext);

    const navigate = useNavigate();


    const handleLogOut = () => {
        signOutUser()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.error(error.message)
                toast.error("Logout Failed")
            })

    }

    const { data: users = {} } = useQuery({
        // queryKey: ['users', user?.email],
        // queryFn: () => fetch(`https://best-bikes-server.vercel.app/users?email=${user?.email}`)
        // .then(res => res.json())
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://best-bikes-server.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;

        }
    })


    const handleThemeSwitch = () => {
        ThemeChange();
        //setTheme(null)
    }




    const menuItems = <React.Fragment>

        <li className='text-md font-bold px-2 hover:text-blue-600  dark:text-white dark:hover:text-orange-500'><Link to='/'>Home</Link></li>
        <li className='text-md font-bold px-2 hover:text-blue-600  dark:text-white dark:hover:text-orange-500'><Link to='/blogs'>Blogs</Link></li>

        {
            user?.uid ?
                <>
                    {
                        user?.uid &&
                        <div className='flex mt-1'>
                            <p className='text-md text-green-600 block lg:hidden'>Hello, {user.displayName ? user.displayName : user.email}
                            </p>
                            <MdOutlineWavingHand className='text-2xl text-green-600 ml-2 lg:hidden'></MdOutlineWavingHand>
                            {users.role && <div className="badge badge-primary -mt-2 lg:hidden">{users.role}</div>}
                        </div>
                    }

                    <li className='font-bold px-2 hover:text-blue-600'><Link to='/dashboard'>Dashboard</Link></li>

                    <li className='text-red-600 font-bold'><button onClick={handleLogOut} className='bg-red-600 text-white rounded-lg'>Sign Out</button></li>

                </>
                :
                <>
                    <li className='font-bold'><Link to='/login' className='bg-green-600 text-white rounded-lg lg:mr-2'>Login</Link></li>
                    <li className='font-bold'><Link to='/signup' className='bg-blue-700 text-white rounded-lg sm:mt-2 md:mt-2 lg:mt-0 mt-2'>Sign Up</Link></li>

                </>

        }


        {
            theme === 'dark' ?
                <BsMoon onClick={handleThemeSwitch} className=" my-auto ml-8 mr-8 sm:mt-3 md:mt-3 lg:mt-2 mt-2 text-3xl mb-4 sm:mb-4 md:mb-4 lg:mb-0" title='Click For Light Mode' ></BsMoon>
                :
                <BsSun onClick={handleThemeSwitch} className=" my-auto ml-4 sm:mt-3 md:mt-3 lg:mt-2 mt-2 text-3xl mb-4 sm:mb-4 md:mb-4 lg:mb-0" title='Click For Dark Mode'></BsSun>
        }

    </React.Fragment>



    return (

        <div>
            <div className="navbar  flex justify-between  pb-6 bg-base-100 dark:bg-gray-900 shadow-xl">

                <div className="navbar-start w-[400px]">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:bg-gray-900">
                            {menuItems}
                        </ul>
                    </div>

                    <div className="avatar">
                        <div className="w-12 mt-6 ml-4">
                            <img className='rounded-lg' src={logo} alt="logo" />
                        </div>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-4xl text-blue-800 dark:text-green-600 mt-6" href='/'>Best Bikes</Link>
                </div>


                <div className='hidden lg:block mt-4'>
                    {
                        user?.uid && <div className='flex'>
                            <p className='text-3xl text-green-600 font-semibold dark:text-blue-700'>Hello, {user.displayName ? user.displayName : user.email} </p>
                            <MdOutlineWavingHand className='text-3xl text-green-600 mt-1 ml-2 dark:text-blue-700'></MdOutlineWavingHand>
                            {users.role && <div className="badge badge-primary  -mt-2">{users.role}</div>}
                        </div>

                    }
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 mt-6">
                        {menuItems}
                    </ul>
                </div>


                <label htmlFor="new-dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Header;