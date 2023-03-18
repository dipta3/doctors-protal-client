import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <div className='flex justify-center my-52'>
            <progress className="progress w-56"></progress>
        </div >
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;