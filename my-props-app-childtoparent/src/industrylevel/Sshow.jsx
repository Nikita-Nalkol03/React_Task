import axios from "axios";
import { useEffect, useState } from "react";

const Sshow=(doRefresh)=>{

    const [allstudent,setAllStudent]=useState([]);
    

   useEffect(()=>{
        loadAllStudent();

    },[doRefresh])

    const loadAllStudent=async()=>{
        const {data}=await axios.get(`http://localhost:3000/students`);
        setAllStudent(data);
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/students/${id}`);
        loadAllStudent();
    }
    

    return (
        <>
        <center>
            <h1>Student Details</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>COURSE</th>
                        <th>FEES</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {allstudent.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.course}</td>
                            <td>{e.fees}</td>
                            <td>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
        </>
    )
};
export default Sshow;