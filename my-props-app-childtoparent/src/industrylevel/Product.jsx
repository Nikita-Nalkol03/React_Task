import axios from "axios";
import { useState } from "react";

const Product=({refresh})=>{

    const [product,setProduct]=useState({name:"",price:"",quantity:"",category:""});

    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]: e.target.value});
    }

    const handleSubmit= async(e)=>{
        e.preventDefault();

        let res= await axios.post(`http://localhost:3000/product`,product);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setProduct({
            name:"",price:"",quantity:"",category:""
        })
    }
    return (
        <>
        <center>
            <h1>Product Form</h1>
            <form onSubmit={handleSubmit}>
                Product Name:<input type="text" name="name" value={product.name} onChange={handleChange} required/><br/>
                Price:<input type="number" name="price" value={product.price} onChange={handleChange} required/><br/>
                Quantity:<input type="number" name="quantity" value={product.quantity} onChange={handleChange} required/><br/>
               Category :<input type="text" name="category" value={product.category} onChange={handleChange} required/><br/>
               <button type="submit">Add Product</button>
            </form>
        </center>
        </>
    )
};
export default Product;