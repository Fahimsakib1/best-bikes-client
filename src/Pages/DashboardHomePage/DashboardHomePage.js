import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import './DashboardHomePage.css'

const DashboardHomePage = () => {
    

    useTitle('Dashboard'); 

    const { user} = useContext(AuthContext);

    const {data: users ={} } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://best-bikes-server.vercel.app/users?email=${user?.email}`);
            const data = await res.json();
            return data;
        
        }
    })
    

    
    return (
        <div className=''>
            <div className="hero min-h-screen main-div">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">
                            Hello {users?.role ? users.role : ''},  {user?.displayName ? user?.displayName : ''}
                        </h1>
                        <p className='text-white text-center text-3xl sm:text-3xl md:text-4xl'>Welcome to <span className=' text-orange-500 text-3xl sm:text-3xl md:text-5xl'>BEST BIKES</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHomePage;