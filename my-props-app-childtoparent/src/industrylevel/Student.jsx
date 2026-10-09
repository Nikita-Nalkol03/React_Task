import axios from "axios";
import { useState } from "react";

const Student=({refresh})=>{

    const [student,setStudent]=useState({name:"",course:"",fees:""});

    const handleChange=(e)=>{
        setStudent({...student,[e.target.name]: e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        let res=await axios.post(`http://localhost:3000/students`,student);
        console.log(res);

        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setStudent({name:"",course:"",fees:""
     } )
}
    return (
        <>
        <center>
            <h1>Student Form</h1>
            <form onSubmit={handleSubmit}>
                Name:<input type="text" name="name" value={student.name} onChange={handleChange} required/><br/>
                Course:<input type="text" name="course" value={student.course} onChange={handleChange} required/><br/>
                fees:<input type="number" name="fees" value={student.fees} onChange={handleChange} required/><br/>
                <button type="submit">Add Student</button>

            </form>
        </center>
        </>
    )
};
export default Student;