import axios from "axios";
import { useEffect, useState } from "react";

const Membertable=({doRefresh})=>{
    const [allmember,setAllMember]=useState([]);

    const loadAllMember=async()=>{
        const {data}=await axios.get(`http://localhost:3000/members`);
        setAllMember(data);
    }

    useEffect(()=>{
        loadAllMember();
    },[doRefresh]);

    const handleDelete=async(id)=>{
        await axios.delete(`http://localhost:3000/members/${id}`);
        loadAllMember();
    }

    return (
        <>
        <center>
            <h1>Member List</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Member Name</th>
                        <th>Mobile</th>
                        <th>Book Name</th>
                        <th>Days</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allmember.map((e)=>{
                            return(
                                <tr key={e.id}>
                                    <td>{e.name}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.book}</td>
                                    <td>{e.days}</td>
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

export default Membertable;