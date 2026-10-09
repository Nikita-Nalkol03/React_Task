import axios from "axios";
import { useState } from "react";

const Book=({refresh})=>{
    const [book,setBook]=useState({name:"",author:"",price:"",quantity:""})

    const handleChange=(e)=>{
        setBook({...book,[e.target.name]:e.target.value});
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        let res=await axios.post(`http://localhost:3000/books`,book);
        console.log(res);
        clearForm();
        refresh(1);
    }

    const clearForm=()=>{
        setBook({name:"",author:"",price:"",quantity:""})
    }

    return (
        <>
        <center>
            <h1>Book Form</h1>
            <form onSubmit={handleSubmit}>
                Book Name:<input type="text" name="name" value={book.name} onChange={handleChange} required/><br/>
                Author:<input type="text" name="author" value={book.author} onChange={handleChange} required/><br/>
                Price:<input type="number" name="price" value={book.price} onChange={handleChange} required/><br/>
                Quantity:<input type="number" name="quantity" value={book.quantity} onChange={handleChange} required/><br/>
                <button type="submit">Submit</button>
            </form>
        </center>
        </>
    )
};

export default Book;