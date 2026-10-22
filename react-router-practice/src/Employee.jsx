import axios from "axios";
import { useEffect, useState } from "react";


const Employee=()=>{

    const [allemployee,setAllEmpoyee]=useState([]);

    const loadAllEmployee= async()=>{
        const {data}=await axios.get(``);
        setAllEmpoyee(data);

    }

    useEffect(()=>{
       loadAllEmployee();
    },[])
    return (
        <>
        <center>

            <h1>Employee form</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>salary</th>
                        <th>designation</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allemployee.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.address}</td>
                            <td>{e.salary}</td>
                            <td>{e.designation}</td>
                            <td>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
        
        </>
    )
};
export default Employee;