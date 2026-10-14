import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
    let isLoggedin=localStorage.getItem("loginStatus");

  return isLoggedin === 'success' ? <Outlet/> :<Navigate to={"/Login"}/>
}

export default ProtectedRoute
