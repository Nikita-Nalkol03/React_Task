import React, { useEffect, useState } from 'react'
import { api } from './apiServices';

function Mobiles() {

    const [allmobile,setAllMobiles]=useState([]);
    const [form,setForm]=useState({ name:"",price:"",brand:"",quantity:""})
    const [edit,setEdit]=useState(null);

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(edit!==null){
      const {data}=await api.put(`/mobiles/${edit}`,form);
           setForm(data);
        }else{
            await api.post("/mobiles",form);
        }
      
        loadAllMobiles();
      
        clearForm();
    }

    const clearForm=()=>{
        setForm({
            name:"",price:"",brand:"",quantity:""
        })
        setEdit(null);
    }

    const loadAllMobiles=async()=>{
        const {data}=await api.get(`/mobiles`);
        setAllMobiles(data)

    }
    useEffect(()=>{
        loadAllMobiles();
    } ,[])

    const handleDelete=async(id)=>{
        await api.delete(`/mobiles/${id}`);
        loadAllMobiles();
    }

    const handleEdit=(form)=>{
      setForm({
    name: form.name,
    price: form.price,
    brand: form.brand,
    quantity:form.quantity
  });

  setEdit(form.id);
    }

  return (
    <div>
      <h2>Mobiles component</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder='enter Mobile name' required /><br/>
        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder='enter Mobile price' required /><br/>
        <input type="text" name="brand" value={form.brand} onChange={handleChange} placeholder='enter Mobile brand' required /><br/>
        <input type="number" name="quantity" value={form.quantity} onChange={handleChange} placeholder='enter quantity' required /><br/>
        <button type="submit">{edit !==null ? "update" : "Add Mobile"}</button>
      </form><br/>
      <table border={2}>    
        <thead>
            <tr>
                <th>NAME</th>
                <th>PRICE</th>
                <th>BRAND</th>
                <th>QUANTITY</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
            {allmobile.map((e)=>(
                <tr key={e.id}>
                    <td>{e.name}</td>
                    <td>{e.price}</td>
                    <td>{e.brand}</td>
                    <td>{e.quantity}</td>
                    <td>
                        <button onClick={()=>handleDelete(e.id)}>Delete</button>
                        <button onClick={()=>handleEdit(e)}>Edit</button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Mobiles
