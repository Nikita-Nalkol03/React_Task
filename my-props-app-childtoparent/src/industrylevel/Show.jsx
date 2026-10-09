import { useEffect, useState } from "react";
import axios from "axios";


const Show=({doRefresh})=>{

    const [allemp,setAllemp]=useState([]);
     
    useEffect(()=>{
        loadAllEmp();

    },[doRefresh])

    const handleDelete= async(id)=>{
        await axios.delete(`http://localhost:3000/employees/${id}`)
        loadAllEmp();
    }

    const loadAllEmp= async()=>{
       const {data}= await axios.get(`http://localhost:3000/employees`);
        setAllemp(data);

    }

    return (
    <>
    <center>
        <h1>Employee Details</h1>
        <table border={2}>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>ROLE</th>
                    <th>SALARY</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {allemp.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.role}</td>
                        <td>{e.salary}</td>
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
export default Show;