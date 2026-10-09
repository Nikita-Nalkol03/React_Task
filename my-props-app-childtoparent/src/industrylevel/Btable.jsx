import axios from "axios";
import { useEffect, useState } from "react";

const Booktable=({doRefresh})=>{
    const [allbook,setAllBook]=useState([]);

    const loadAllBook=async()=>{
        const {data}=await axios.get(`http://localhost:3000/books`);
        setAllBook(data);
    }

    useEffect(()=>{
        loadAllBook();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/books/${id}`);
        loadAllBook();
    }

    return (
        <>
        <center>
            <h1>Book List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allbook.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.author}</td>
                                    <td>{e.price}</td>
                                    <td>{e.quantity}</td>
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

export default Booktable;