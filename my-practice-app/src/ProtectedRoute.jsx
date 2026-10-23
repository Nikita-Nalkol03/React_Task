import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {

    const isLogin = localStorage.getItem("isLogin");

    if (!isLogin) {
        return <Navigate to="/" />;
    }

    return children;
}

export default ProtectedRoute