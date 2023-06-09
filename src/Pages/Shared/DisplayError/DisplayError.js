import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const error = useRouteError()
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch((error) => { console.error(error) })
    }
    return (
        <div>
            <p className='text-red-500'>Something Went Wrong!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl">Please <button className='btn' onClick={handleLogOut}>Sign Out</button> and logback in</h4>
        </div>
    );
};

export default DisplayError;