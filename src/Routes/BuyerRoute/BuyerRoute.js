import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useBuyer from '../../Hooks/useBuyer';

const BuyerRoute = ({children}) => {
    
    const { user, loading } = useContext(AuthContext);
    const[isBuyer, isBuyerLoading] = useBuyer(user?.email)

    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-800 mx-auto mt-64"></div>
    }

    if (user && isBuyer) {
        return children;
    }
    
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default BuyerRoute;