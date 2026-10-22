import React, { useState } from 'react'
import { api } from './apiServices';
import { Navigate, useNavigate } from 'react-router-dom';

const Singup = () => {
     const [form,setForm]=useState({ firstname:"",lastname:"",  email:"" ,mobile:"", username:"",password:"",securityquestion:"",securityanswer:""});

    const navigate = useNavigate();

    const handleChange=(e)=>{

        setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();
     
      const res= await api.post(`/users`,form);
        
      alert('sing up success...')
      navigate("/")
        clearForm();
     
    }
     
    const clearForm=()=>{
        setForm({
            firstname:"",lastname:"",  email:"" ,mobile:"", username:"",password:"",securityquestion:"",securityanswer:""
        })
    }
  return (
    <div>
         <form onSubmit={handleSubmit}>

            <input type="text" name="firstname" value={form.firstname} onChange={handleChange} required placeholder='enter firstname'/><br/>

            <input type="text" name="lastname" value={form.lastname} onChange={handleChange} required placeholder='enter lastname'/><br/>

            <input type="text" name="email" value={form.email} onChange={handleChange} required placeholder='enter email '/><br/>

            <input type="text" name="mobile" value={form.mobile} onChange={handleChange} required placeholder='enter  mobile'/><br/>

            <input type="text" name="username" value={form.username} onChange={handleChange} required placeholder='enter username or mobile'/><br/>

            <input type="text" name="password" value={form.password} onChange={handleChange} required placeholder='enter password'/><br/>

            <select name="securityquestion" value={form.securityquestion} onChange={handleChange} required >
                <option value="">Select Security Question</option>
  <option value="What is your favourite colour?">
    What is your favourite colour?
  </option>
  <option value="What is your pet name?">
    What is your pet name?
  </option>
  <option value="What is your birthplace?">
    What is your birthplace?
  </option>
  <option value="What is your favourite food?">
    What is your favourite food?
  </option>
  <option value="What is your childhood nickname?">
    What is your childhood nickname?
  </option>

                </select><br/>

            <input type="text" name="securityanswer" value={form.securityanswer} onChange={handleChange} required placeholder='enter securityanswer'/><br/>

            <button type="submit">Submit</button>
        </form>
        <br/><br/>
        

    </div>
  )
}

export default Singup