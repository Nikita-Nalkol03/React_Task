
import React, { useEffect, useState } from 'react'
import api from './apiServices';

const Employee = ({editEmp,onSaved}) => {
    const [employee,setEmployee]=useState({
        name:"",role:"",salary:"",address:""
    });

    const [edit,setEdit]=useState(null);

    const handleChange=(e)=>{
        setEmployee({...employee,[e.target.name]:e.target.value});
    }

    const clearForm=()=>{
        setEmployee({
            name:"",role:"",salary:"",address:""
        });
        setEdit(null);
    }

    useEffect(()=>{
        if(editEmp){
            setEmployee({
                name:editEmp.name,
                role:editEmp.role,
                salary:editEmp.salary,
                address:editEmp.address
            });
            setEdit(editEmp.id);
        }else{
            clearForm();
        }
    },[editEmp]);

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(edit !== null){
            await api.put(`/employees/${edit}`,employee);
        }else{
            await api.post(`/employees`,employee);
        }

        clearForm();
        onSaved();
    }

    return (
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={employee.name} onChange={handleChange} placeholder='Enter name' required /><br/>

                    <input type="text" name="role" value={employee.role} onChange={handleChange} placeholder='Enter role' required /><br/>

                    <input type="text" name="salary" value={employee.salary} onChange={handleChange} placeholder='Enter salary' required /><br/>

                    <input type="text" name="address" value={employee.address} onChange={handleChange} placeholder='Enter Address' required /><br/>

                    <button type="submit">
                        {edit !== null ? "Update Employee" : "Add Employee"}
                    </button>
                </form>
            </center>
        </div>
    )
}

export default Employee
