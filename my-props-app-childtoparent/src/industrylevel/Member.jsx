import axios from "axios";
import { useState } from "react";

const Member=({refresh})=>{
    const [member,setMember]=useState({name:"",mobile:"",book:"",days:""})

    const handleChange=(e)=>{
        setMember({...member,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let res=await axios.post(`http://localhost:3000/members`,member);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setMember({name:"",mobile:"",book:"",days:""})
    }

    return (
        <>
        <center>
            <h1>Member Form</h1>
            <form onSubmit={handleSubmit}>
                Member Name:<input type="text" name="name" value={member.name} onChange={handleChange} required/><br/>
                Mobile:<input type="text" name="mobile" value={member.mobile} onChange={handleChange} required/><br/>
                Book Name:<input type="text" name="book" value={member.book} onChange={handleChange} required/><br/>
                Days:<input type="number" name="days" value={member.days} onChange={handleChange} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};

export default Member;