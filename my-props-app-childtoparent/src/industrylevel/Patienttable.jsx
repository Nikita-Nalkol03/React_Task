import axios from "axios";
import { useEffect, useState } from "react";

const Patienttable=({doRefresh})=>{

    const [allpatient,setAllPatient]=useState([]);

    const loadAllPatient=async()=>{

        const {data}=await axios.get(`http://localhost:3000/patient`);
        setAllPatient(data);

    }

    useEffect(()=>{
        loadAllPatient();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/patient/${id}`);
            loadAllPatient();
        
    }

    return (
        <>
        <center>
            <h1>Patient Details</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Disease</th>
                        <th>Dr Name</th>
                        <th>Room No</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allpatient.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.disease}</td>
                            <td>{e.drname}</td>
                            <td>{e.roomno}</td>
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
export default Patienttable;