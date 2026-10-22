import axios from 'axios'
import React, { useState } from 'react'
import { api } from './apiServices';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [form,setForm]=useState({ username:"",password:""})
    const navigate = useNavigate();

    const handleChange=(e)=>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
     const {data}=await api.get("/users")
     
     const userFound=data.find((u)=>
        u.username== form.username || u.mobile == form.username || u.email==form.username )

     if(userFound){
        if(userFound.password==form.password){
            localStorage.setItem("loginStatus","success");

            localStorage.setItem("userDetails", JSON.stringify(userFound)

            )
            navigate("/dashboard")
        }else{
            alert('password is incorrect')
        }

     }else{
        alert('user not found, please sing up first')
     }

       clearForm();
    }
     
    const clearForm=()=>{
        setForm({
            username:"",password:""
        })
    }

    const handleSingup=()=>{
        navigate('/singup')
    }
  return (
    <div>
        <h2>login form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={form.username} onChange={handleChange} required placeholder='enter username or mobile'/><br/>

            <input type="password" name="password" value={form.password} onChange={handleChange} required placeholder='enter password'/><br/>
            <button type="submit">Login</button>
            <button
  type="button"
  onClick={() => navigate("/forgotpassword")}
>
  Forgot Password?
</button>
        </form><br/>
        <button onClick={handleSingup}>Sing up</button>

    </div>
  )
}

export default Login