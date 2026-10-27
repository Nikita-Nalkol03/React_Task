import { useState, useEffect } from 'react';
import api from './apiService';


const App=()=> {
  const [allusers,setAllUsers]=useState([]);
  const [form,setForm]=useState({name:"",email:"",role:"",joindate:"",status:""})
  const [edit,setEdit]=useState(null);

  const [statusFilter,setStatusFilter]=useState('All');

  //filter logic Active and InActive status
  const filteredUser=allusers.filter((user)=>{
    if(statusFilter=='All') return true;
    return user.status===statusFilter;
  });

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(edit!==null){
      await api.put(`/users/${edit}`,form);
    }else{
      await api.post(`/users`,form);

    }
    clearForm();
    loadAllUser();
  }

  const clearForm=()=>{
    setForm({
      name:"",email:"",role:"",joindate:"",status:""
    })
    setEdit(null);
  }
  const loadAllUser=async()=>{
    const {data}=await api.get(`/users`);
    setAllUsers(data);
  }

  useEffect(()=>{
    loadAllUser();
  },[]);

  const handleDelete=async(id)=>{
    await api.delete(`/users/${id}`);
    loadAllUser();
  }

  const handleEdit=(e)=>{
    setForm({
      name:e.name,
      email:e.email,
      role:e.role,
      joindate:e.joindate,
      status:e.status
    })
    setEdit(e.id);
  }
  return (
    <div>
      <center>
      <h1>User Management system</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={form.name} onChange={handleChange} required placeholder='Enter Name' /><br/>
        <input type="text" name='email' value={form.email} onChange={handleChange} required placeholder='Enter Email' /><br/>
        <input type="text" name='role' value={form.role} onChange={handleChange} required placeholder='Enter Role' /><br/>
        <input type="text" name='joindate' value={form.joindate} onChange={handleChange} required placeholder='Enter joining date' /><br/>
        <select name='status' value={form.status} onChange={handleChange} required placeholder='Enter status' >
          <option value="">Select status</option>
          <option value="Active">Active</option>
          <option value="InActive">InActive</option>
          
          </select><br/>

        <button type="submit">{edit !== null ?"Update User":"Add User"}</button>
      </form>
      <br/>
      <select value={statusFilter} onChange={(e)=> setStatusFilter(e.target.value)}>
        <option value='All'>All Users</option>
        <option value='Active'>Active</option>
        <option value='InActive'>InActive</option>
      </select>
        <table border={2}>
          <thead>
            <tr>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>JOINING DATE</th>
              <th>STATUS</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {
               filteredUser.map((e)=>(
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td>{e.joindate}</td>
                  <td>{e.status}</td>
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
  );
}

export default App;