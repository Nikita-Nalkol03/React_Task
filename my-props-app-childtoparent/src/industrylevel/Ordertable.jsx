import axios from "axios";
import { useEffect, useState } from "react";

const Ordertable=({doRefresh})=>{
    const [allorder,setAllOrder]=useState([]);

    const loadAllOrder=async()=>{
        const {data}=await axios.get(`http://localhost:3000/orders`);
        setAllOrder(data);
    }

    useEffect(()=>{
        loadAllOrder();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/orders/${id}`);
        loadAllOrder();
    }

    return (
        <>
        <center>
            <h1>Order List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Customer</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allorder.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.customer}</td>
                                    <td>{e.product}</td>
                                    <td>{e.quantity}</td>
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

export default Ordertable;