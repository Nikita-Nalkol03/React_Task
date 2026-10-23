
import React, { useEffect, useState } from 'react'
import api from './apiServices';

const ShowEmp = ({onEdit,refresh}) => {

    const [allEmp,setEmployee]=useState([]);

    const loadAllEmployee=async()=>{
        const {data}=await api.get(`/employees`);
        setEmployee(data);
    }

    useEffect(()=>{
        loadAllEmployee();
    },[refresh]);

    const handleDelete=async(id)=>{
        await api.delete(`/employees/${id}`);
        loadAllEmployee();
    }

    const handleEdit=(employee)=>{
        onEdit(employee);
    }

    return (
        <div>
            <center>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>ROLE</th>
                            <th>SALARY</th>
                            <th>ADDRESS</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            allEmp.map((e)=>(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.role}</td>
                                    <td>{e.salary}</td>
                                    <td>{e.address}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                        <button onClick={()=>handleEdit(e)}>Edit</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </center>
        </div>
    )
}

export default ShowEmp
