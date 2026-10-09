import axios from "axios";
import { useEffect, useState } from "react";

const Teachertable=({doRefresh})=>{
    const [allteacher,setAllTeacher]=useState([]);

    const loadAllTeacher=async()=>{
        const {data}=await axios.get(`http://localhost:3000/teachers`);
        setAllTeacher(data);
    }

    useEffect(()=>{
        loadAllTeacher();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/teachers/${id}`);
        loadAllTeacher();
    }

    return (
        <>
        <center>
            <h1>Teacher List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Teacher Name</th>
                        <th>Subject</th>
                        <th>Salary</th>
                        <th>Experience</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allteacher.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.subject}</td>
                                    <td>{e.salary}</td>
                                    <td>{e.experience}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
        </>
    )
};

export default Teachertable;