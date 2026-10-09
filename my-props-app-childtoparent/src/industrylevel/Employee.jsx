import axios from "axios";
import { useState } from "react";

const Employee=({refresh})=>{

    const [form,setForm]=useState({name:"",role:"",salary:""});

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();

       let res= await axios.post(`http://localhost:3000/employees`,form)
       console.log(res);

       clearForm();
       refresh(1)
    }

    const clearForm=()=>{
        setForm({
            name:"",role:"",salary:""
        })
    }


    return (
        <>
        <center>
           <h1>Employee Form</h1>
            <form onSubmit={handleSubmit}>
                Name:<input type="text" name="name" value={form.name} onChange={handleChange} required/><br/>
                Role:<input type="text" name="role" value={form.role} onChange={handleChange} required/><br/>
                Salary:<input type="text" name="salary" value={form.salary} onChange={handleChange} required/><br/>
                <button type="submit">Add Employee</button>

            </form>
        </center>
        </>
    )
};
export default Employee;