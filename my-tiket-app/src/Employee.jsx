import axios from "axios";
import { useEffect, useState } from "react";

const Employee=()=>{

    const [allemployee,setAllEmployee]=useState([]);
    const [employee,setEmployee]=useState({name:"",dept:"HR",salary:"",designation:"Software Developer"});
    const [editId,setEditId]=useState(null);

    const handleChange=(e)=>{
        setEmployee({...employee,[e.target.name]: e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();

        if (editId !== null){
            await axios.put(`http://localhost:3000/employee/${editId}`,employee);
            setEditId(null);
        }else{
             await axios.post(`http://localhost:3000/employee`,employee);
        }

        loadAllEmployee();
        clearForm();
    }

     const editEmployee=(e)=>{
        setEmployee({
            name:e.name,
            dept:e.dept,
            salary:e.salary,
            designation:e.designation
        });
        setEditId(e.id);
     }
    const handleUpdate=async(id)=>{
        await axios.put(`http://localhost:3000/employee/${id}`,employee);
        loadAllEmployee();
        clearForm();
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/employee/${id}`);
        loadAllEmployee();
    }
    const clearForm=()=>{
        setEmployee({
            name:"",dept:"HR",salary:"",designation:"Software Developer"
        })
        setEditId(null);
    }

    const loadAllEmployee=async()=>{
        const {data}=await axios.get(`http://localhost:3000/employee`);
        setAllEmployee(data);

    }
      useEffect(()=>{
        loadAllEmployee();
      }, [])
    return (
        <>
        <center>
            <h1>Employee Dashborad</h1>
            <form onSubmit={handleSubmit}>
                name:<input type="text" name="name" value={employee.name} onChange={handleChange} required /><br/>
                Depatment:
                <select name="dept" value={employee.dept} onChange={handleChange} required>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Sales">Sales</option>
                    <option value="Support">Support</option>
                    <option value="Admin">Admin</option>
                    <option value="Account">Account</option>
                </select><br/>
                Salary:<input type="number" name="salary" value={employee.salary} onChange={handleChange} required /><br/>
                Designation:<select name="designation" value={employee.designation} onChange={handleChange} required >
                    <option value="Software Developer">Software Developer</option>
                    <option value="Senior Software Developer">Senior Software Developer</option>
                       <option value="Frontend Developer">Frontend Developer</option>
                     <option value="Backend Developer">Backend Developer</option>
                     <option value="Full Stack Developer">Full Stack Developer</option>
                      <option value="Software Tester">Software Tester</option>
                      <option value="QA Engineer">QA Engineer</option>
                      <option value="Project Manager">Project Manager</option>
                     <option value="Team Leader">Team Leader</option>
                         <option value="HR Manager">HR Manager</option>
                        <option value="HR Executive">HR Executive</option>
                </select>
                <br/>
                <button type="submit">{editId !== null ? "Update Employee" : "Add Employee"}</button>
            </form>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>DEPARTMENT</th>
                        <th>SALARY</th>
                        <th>DESIGNATION</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allemployee.map((e)=>(
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.dept}</td>
                                <td>{e.salary}</td>
                                <td>{e.designation}</td>
                                <td>
                                    <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                    <button onClick={()=>editEmployee(e)}>Update</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </center>
        </>
    )
};
export default Employee;