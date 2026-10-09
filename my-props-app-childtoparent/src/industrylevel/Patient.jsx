import axios from "axios";
import { useState } from "react";

const Patient=({refresh})=>{

    const [patient,setPatient]=useState({name:"",age:"",disease:"",drname:"",roomno:""})

    const handleChange=(e)=>{
        setPatient({...patient,[e.target.name]: e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        let res=await axios.post(`http://localhost:3000/patient`,patient);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setPatient({
            name:"",age:"",disease:"",drname:"",roomno:""
        })
    }
    return (
        <>
        <center>
            <h1>Patient Form</h1>
            <form onSubmit={handleSubmit}>

                Patient Name:<input type="text" name="name" value={patient.name} onChange={handleChange} required /><br/>
                Patient Age:<input type="number" name="age" value={patient.age} onChange={handleChange} required /><br/>
                Disease:<input type="text" name="disease" value={patient.disease} onChange={handleChange} required /><br/>
                Dr Name:<input type="text" name="drname" value={patient.drname} onChange={handleChange} required /><br/>
                Room No:<input type="number" name="roomno" value={patient.roomno} onChange={handleChange} required /><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};
export default Patient;