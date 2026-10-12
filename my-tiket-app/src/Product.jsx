import axios from "axios";
import { useEffect, useState } from "react";

const Product=()=>{

    const [allproduct,setAllProduct]=useState([]);
    const [product,setProduct]=useState({name:"",category:"",price:"",quantity:"",brand:"",expirydate:""});
    const [editId,setEditId]=useState(null);

    const editProduct=(e)=>{
       setProduct({
                name:e.name,
                category:e.category,
                price:e.price,
                quantity:e.quantity,
                brand:e.brand,
                expirydate:e.expirydate
       }) 
       setEditId(e.id);

    }

    const handleChange=(e)=>{
        setProduct({...product,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(editId!==null){
            await axios.put(`http://localhost:3000/products/${editId}`,product)
            setEditId(null);
        }else{
            await axios.post(`http://localhost:3000/products`,product);
        }
        loadAllProduct();
        clearForm();
    }

    const clearForm=()=>{
        setProduct({
            name:"",category:"",price:"",quantity:"",brand:"",expirydate:""
        })
      setEditId(null);
    }

    const loadAllProduct=async(e)=>{

        const {data}=await axios.get(`http://localhost:3000/products`);
        setAllProduct(data);
    }
     
    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/products/${id}`);
        loadAllProduct();
    }
    useEffect(()=>{
        loadAllProduct();
    },[])
    return (
        <>
        <center>
            <h1>Product Management System</h1>

            <form onSubmit={handleSubmit}>
                Product Name:<input type="text" name="name" value={product.name} onChange={handleChange} required /><br/>
                Category: <select name="category" value={product.category} onChange={handleChange} required >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                   <option value="Grocery">Grocery</option>
                   <option value="Clothing">Clothing</option>
                    <option value="Furniture">Furniture</option>
                     <option value="Beauty">Beauty</option>
                    <option value="Footwear">Footwear</option>
                   <option value="Sports">Sports</option>
                   <option value="Stationery">Stationery</option>
                <option value="Home Appliances">Home Appliances</option>
                     <option value="Toys">Toys</option>
                </select><br/>

                Price:<input type="number" name="price" min="0" value={product.price} onChange={handleChange} required /><br/>

                Quantity:<input type="number" min="0" name="quantity" value={product.quantity} onChange={handleChange} required /><br/>

                Brand:<select name="brand" value={product.brand} onChange={handleChange} required>
                    <option value="">Select Brand</option>
                   <option value="Samsung">Samsung</option>
                     <option value="Apple">Apple</option>
                   <option value="Dell">Dell</option>
                     <option value="HP">HP</option>
                   <option value="Nike">Nike</option>
                       <option value="Adidas">Adidas</option>
                     <option value="Puma">Puma</option>
                       <option value="Nivea">Nivea</option>
                    <option value="Sony">Sony</option>
                 <option value="LG">LG</option>
                 <option value="Other">Other</option>

                </select><br/>
                Expiry Date:<input type="date" name="expirydate" value={product.expirydate} onChange={handleChange} required /><br/>

                <button type="submit">{editId!==null ? "Update Product" : "Add Product"}</button>
            </form>

            <table border={2}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Brand</th>
                        <th>Expiry Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allproduct.map((e)=>(
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{e.category}</td>
                        <td>{e.price}</td>
                        <td>{e.quantity}</td>
                        <td>{e.brand}</td>
                        <td>{e.expirydate}</td>
                        <td>
                            <button>{Number(e.quantity)==0 ? "out of stock":Number(e.quantity)<= 10 ? "Low Stock" : "In stock"}</button>
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            <button onClick={()=>editProduct(e)}>Update</button>
                        </td>

                    </tr>
                ))}
                </tbody>
            </table>
        </center>
        </>
    )
};
export default Product;

