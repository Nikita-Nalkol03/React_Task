import axios from "axios";
import { useEffect, useState } from "react";

const Vehicletable=({doRefresh})=>{
    const [allvehicle,setAllVehicle]=useState([]);

    const loadAllVehicle=async()=>{
        const {data}=await axios.get(`http://localhost:3000/vehicles`);
        setAllVehicle(data);
    }

    useEffect(()=>{
        loadAllVehicle();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/vehicles/${id}`);
        loadAllVehicle();
    }

    return (
        <>
        <center>
            <h1>Vehicle List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Vehicle Name</th>
                        <th>Vehicle Number</th>
                        <th>Vehicle Type</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allvehicle.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.number}</td>
                                    <td>{e.type}</td>
                                    <td>{e.price}</td>
                                    <td>
                                        <button onClick={()=>handleDelete(e.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </center>
        </>
    )
};

export default Vehicletable;