import React, { useState } from 'react'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import Logout from './Logout'
import Singup from './Singup'
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Profile from './Profile'
import ForgotPassword from './ForgotPassword'


const App = () => {
    
  const [status,setStatus]=useState(()=>localStorage.getItem("loginStatus")|| '')
  
  return (
    <div>
      <center>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Login/>} />
          <Route path="/singup" element={<Singup/>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>

          <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/profile" element={<Profile/>}/>
          

          </Route>

        </Routes>
      </center>


    </div>
  )
}

export default App