import axios from "axios";
import { useState } from "react";

const Teacher=({refresh})=>{
    const [teacher,setTeacher]=useState({name:"",subject:"",salary:"",experience:""})

    const handleChange=(e)=>{
        setTeacher({...teacher,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let res=await axios.post(`http://localhost:3000/teachers`,teacher);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setTeacher({name:"",subject:"",salary:"",experience:""})
    }

    return (
        <>
        <center>
            <h1>Teacher Form</h1>
            <form onSubmit={handleSubmit}>
                Teacher Name:<input type="text" name="name" value={teacher.name} onChange={handleChange} required/><br/>
                Subject:<input type="text" name="subject" value={teacher.subject} onChange={handleChange} required/><br/>
                Salary:<input type="number" name="salary" value={teacher.salary} onChange={handleChange} required/><br/>
                Experience:<input type="number" name="experience" value={teacher.experience} onChange={handleChange} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};

export default Teacher;