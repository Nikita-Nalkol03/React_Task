import axios from "axios";
import { useState } from "react";

const Order=({refresh})=>{
    const [order,setOrder]=useState({customer:"",product:"",quantity:"",price:""})

    const handleChange=(e)=>{
        setOrder({...order,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let res=await axios.post(`http://localhost:3000/orders`,order);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setOrder({customer:"",product:"",quantity:"",price:""})
    }

    return (
        <>
        <center>
            <h1>Order Form</h1>
            <form onSubmit={handleSubmit}>
                Customer Name:<input type="text" name="customer" value={order.customer} onChange={handleChange} required/><br/>
                Product Name:<input type="text" name="product" value={order.product} onChange={handleChange} required/><br/>
                Quantity:<input type="number" name="quantity" value={order.quantity} onChange={handleChange} required/><br/>
                Price:<input type="number" name="price" value={order.price} onChange={handleChange} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};

export default Order;