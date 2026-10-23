import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import ShowEmp from './ShowEmp'
import Employee from './Employee'
import Login from './Login'
import './App.css'
import ProtectedRoute from './ProtectedRoute'

const EmployeePage = () => {

  const navigate=useNavigate();

    const handleLogout=()=>{
      localStorage.removeItem("isLogin");
      navigate("/");
    }  

    const [edit,setEdit]=useState(null);
    const [refresh,setRefresh]=useState(0);
     
    
    const handleSaved=()=>{
        setEdit(null);
        setRefresh((prev)=>prev+1);
    }

    return (
        <div>
            <center>
                <h1>Employee Management System</h1>
                <button onClick={handleLogout}>Logout</button>

                <Employee editEmp={edit} onSaved={handleSaved}/>

                <br/>

                <ShowEmp onEdit={setEdit} refresh={refresh}/>
            </center>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/employees" element={
                  <ProtectedRoute>
                    <EmployeePage/>
                  </ProtectedRoute>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default App