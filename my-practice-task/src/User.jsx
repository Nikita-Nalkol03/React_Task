import React, { useEffect, useState } from 'react'
import api from './apiService';
import './App.css';
const User = () => {

    const [alluser , setAllUser]=useState([]);
    const [user,setUser]=useState({ fullName:"",email:"",phone:"",age:"",gender:"",city:"",role:"",status:""});
    const [edit,setEdit]=useState(null);
    const [roleFilter , setRoleFilter]=useState("");
    const [statusFilter, setStatusFilter]=useState("");
    const [nameFilter,setNameFilter]=useState("");
    //pagination
    const [currentPage,setCurrentPage]=useState(1);
    const [usersPerPage]=useState(5);
   

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(edit !== null){
            await api.put(`/users/${edit}`,user);
        }else{
             await api.post(`/users`,user);
        }
        loadAllUser();
        clearForm();
    }

    const clearForm=()=>{
        setUser({
            fullName:"",email:"",phone:"",age:"",gender:"",city:"",role:"",status:""
        })
        setEdit(null);
    }
    const loadAllUser=async()=>{
        const {data}=await api.get(`/users`);
        setAllUser(data);
    }

    useEffect(()=>{
        loadAllUser();
    
    },[])

    const handleDelete=async(id)=>{
        await api.delete(`/users/${id}`);
        loadAllUser();
    }
    const handleUpdate=(e)=>{
        setUser({
            fullName:e.fullName,
            email: e.email,
        phone: e.phone,
        age: e.age,
        gender: e.gender,
        city: e.city,
        role: e.role,
        status: e.status
        })
        setEdit(e.id);
    }
    //filter by role
    const filteredUser=alluser.filter((e)=>{
        return (
        (roleFilter === ""||e.role===roleFilter)&&
        (statusFilter === ""||e.status===statusFilter)&&
        (nameFilter===""|| e.fullName.toLowerCase().includes(nameFilter.toLowerCase())));
       
    });
    //pagination
     const lastIndex=currentPage * usersPerPage;
    const firstIndex=lastIndex-usersPerPage;
    const currentUsers=filteredUser.slice(firstIndex,lastIndex);

    const totalPages=Math.ceil(
        filteredUser.length / usersPerPage
    );
    useEffect(() => {
    setCurrentPage(1);
}, [roleFilter, statusFilter, nameFilter]);

   useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
        setCurrentPage(totalPages);
    }
}, [currentPage, totalPages]);
  return (
    <div className='container'>
        <center>
            <h1>User Management System</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" value={user.fullName} onChange={handleChange} placeholder='Enter User name' required /><br/>
                <input type="text" name="email" value={user.email} onChange={handleChange} placeholder='Enter User email' required /><br/>
                <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder='Enter User phone number' required /><br/>
                <input type="number" name="age" value={user.age} onChange={handleChange} placeholder='Enter User age' required /><br/>

                <select  name="gender" value={user.gender} onChange={handleChange} required >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    </select><br/>

                    <select name="city" value={user.city} onChange={handleChange} required>
                        <option value="">Select City</option>
                        <option value="pune">pune</option>
                        <option value="mumbai">mumbai</option>
                        <option value="nashik">nashik</option>
                        <option value="nagpur">nagpur</option>
                        <option value="delhi">delhi</option>
                    </select><br/>

                    <select name="role" value={user.role} onChange={handleChange} required >
                        <option value="">Select Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select><br/>

                    <select name="status" value={user.status} onChange={handleChange} required>
                    <option value="">Select Status</option>
                    <option value="Active">Active</option>
                    <option value="InActive">InActive</option>
                    </select><br/>
                    <button type="submit">{edit !== null?"update" :"Submit"}</button>
            </form>
            <br/>
            <div className="filter-container">
                 <input type="text" value={nameFilter} onChange={(e)=>setNameFilter(e.target.value)} placeholder='Search by Name'/>
            <select value={roleFilter} onChange={(e)=>setRoleFilter(e.target.value)}>
                <option value="">All Roles</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
            </select>
            <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)}>
                <option value="">All Status</option>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
            </select>
           
            </div>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ROLE</th>
                        <th>STATUS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentUsers.length>0?(
                        currentUsers.map((e)=>(
                            <tr key={e.id}>
                                <td>{e.fullName}</td>
                                <td>{e.email}</td>
                                <td>{e.phone}</td>
                                <td>{e.role}</td>
                                <td>{e.status}</td>
                                <td>
                                    <button onClick={()=>handleDelete(e.id)}>Delete
                                    </button>
                                    <button onClick={()=>handleUpdate(e)} >Edit</button>
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="6">No User found</td>
                        </tr>
                    )
                    }
                </tbody>
            </table>
            <div className='pagination'>
                <button onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage ===1}>Previous</button>
                <span>
                    Page{currentPage} of {totalPages}
                </span>
                <button onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages || totalPages===0}>
                    Next
                </button>

            </div>
        </center>
    </div>
  )
}

export default User