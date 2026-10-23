
import React, { useState } from 'react'
import ShowEmp from './ShowEmp'
import Employee from './Employee'
import './App.css'

const App = () => {

    const [edit,setEdit]=useState(null);
    const [refresh,setRefresh]=useState(0);

    const handleSaved=()=>{
        setEdit(null);
        setRefresh((prev)=>prev+1);
    }

    return (
        <div>
            <center>
                <h1>Employee Management System</h1>

                <Employee editEmp={edit} onSaved={handleSaved}/>

                <br/>

                <ShowEmp onEdit={setEdit} refresh={refresh}/>
            </center>
        </div>
    )
}

export default App
