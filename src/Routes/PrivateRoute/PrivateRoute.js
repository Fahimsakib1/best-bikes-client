import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    
    const {user, loading} = useContext(AuthContext);

    console.log("Private Route Loading ",loading)

    const location = useLocation();

    if(loading){
        return <div className="h-32 w-32 border-8 border-dashed rounded-full animate-spin border-blue-800 mx-auto mt-64"></div>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute; 