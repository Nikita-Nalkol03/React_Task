import React, { useState } from 'react'
import api from './apiServices';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form,setForm]=useState({email:"",password:""});

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {data}=await api.get(`/admin?email=${form.email}&password=${form.password}`);

        if(data.length > 0){
            localStorage.setItem("isLogin","true");
            navigate("/employees")
        }else{
            alert("Inalid Email or Password");
        }
    }
    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value
        });
    }

  return (
    <div>
        <center>
            <h1>Employee Management System</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={form.email} onChange={handleChange} placeholder='Enter Email' required /><br/>
                <input type="text" name="password" value={form.password} onChange={handleChange} placeholder='Enter password' required /><br/>
                <button type="submit">Login</button>

            </form>
        </center>
    </div>
  )
}

export default Login