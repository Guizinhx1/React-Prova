import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        return <Navigate to="/login" />;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
