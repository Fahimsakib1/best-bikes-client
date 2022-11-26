import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useSeller from '../../Hooks/useSeller';

const SellerRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);

    const[isSeller, isSellerLoading] = useSeller(user?.email)

    const location = useLocation();

    if (loading || isSellerLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-800 mx-auto mt-64"></div>
    }

    if (user && isSeller) {
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>

};

export default SellerRoute; 