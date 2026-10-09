import axios from "axios";
import { useState } from "react";

const Vehicle=({refresh})=>{
    const [vehicle,setVehicle]=useState({name:"",number:"",type:"",price:""})

    const handleChange=(e)=>{
        setVehicle({...vehicle,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let res=await axios.post(`http://localhost:3000/vehicles`,vehicle);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setVehicle({name:"",number:"",type:"",price:""})
    }

    return (
        <>
        <center>
            <h1>Vehicle Form</h1>
            <form onSubmit={handleSubmit}>
                Vehicle Name:<input type="text" name="name" value={vehicle.name} onChange={handleChange} required/><br/>
                Vehicle Number:<input type="text" name="number" value={vehicle.number} onChange={handleChange} required/><br/>
                Vehicle Type:<input type="text" name="type" value={vehicle.type} onChange={handleChange} required/><br/>
                Price:<input type="number" name="price" value={vehicle.price} onChange={handleChange} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};

export default Vehicle;