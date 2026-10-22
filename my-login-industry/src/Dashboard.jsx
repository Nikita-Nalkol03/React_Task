
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logout from './Logout';

const Dashboard = () => {
  const navigate = useNavigate();
 const userInfo=JSON.parse(localStorage.getItem("userDetails"))
  return (
    <div>
      <h2>Welcome to user Dashboard</h2>
         <div style={{marginLeft: "80%"}}><Logout/>
          </div>
          <NavLink to="/profile" >Profile</NavLink>{" | "}
          <NavLink>Message</NavLink>
        
      <h3>First Name:{userInfo.firstname}</h3>
      <h3>Last Name:{userInfo.lastname}</h3>
      <h3>Email:{userInfo.email}</h3>
    </div>
  );
};

export default Dashboard;
