import React, { useEffect, useState } from 'react'
import api from './apiService';
import './dashboard.css';

const Dashboard = () => {

    const [alluser,setAllUser]=useState([]);

    const loadAllUser=async()=>{
        const {data}=await api.get(`/users`);
        setAllUser(data);
    }

    useEffect(()=>{
        loadAllUser();
    },[]);
  return (
    <div className='dashboard'>
      <h2>Dashboard</h2>

      <div className='dashboard-cards'>
        <div className='card'>
            <h3>Total Users</h3>
            <h2>{alluser.length}</h2>
        </div>
        <div className='card'> 
            <h3>Active Users</h3>
            <h2>{alluser.filter((e)=> e.status==="Active").length}</h2>
        </div>
        <div className='card'>
            <h3>InActive Users</h3>
            <h2>{alluser.filter((e)=>e.status==="InActive").length}</h2>
        </div>
        <div className='card'>
            <h3>Admin Users</h3>
            <h2>{alluser.filter((e)=>e.role==="Admin").length}</h2>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
