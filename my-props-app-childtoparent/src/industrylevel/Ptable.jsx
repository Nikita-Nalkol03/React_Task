import axios from "axios";
import { useEffect, useState } from "react";

const Ptable=({doRefresh})=>{

    const [allproduct,setAllProduct]=useState([]);

    useEffect(()=>{
        loadAllProduct();
    }, [doRefresh])

    const loadAllProduct= async()=>{

        const {data}=await axios.get(`http://localhost:3000/product`);
        setAllProduct(data);
    }

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/product/${id}`);
        loadAllProduct();
    }

    return (
        <>
        <center>
            <h1>Product Details</h1>
            <table border={2}>
                <thead>
                    <tr>
                        <th>Product_Name</th>
                        <th>Price</th>
                        <th>Quantityt</th>
                        <th>Category</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allproduct.map((e)=>(
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.price}</td>
                            <td>{e.quantity}</td>
                            <td>{e.category}</td>
                            <td>{Number(e.price)*Number(e.quantity)}</td>
                            <td>
                                <button onClick={()=>handleDelete(e.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
        </>
    )
};
export default Ptable;