import React, { useState } from 'react'
import './App.css';
const App = () => {

  const [todo,setTodo]=useState([]);
  const [form,setForm]=useState({todo:""});

  const handleAdd=(e)=>{
    e.preventDefault();
    if(form.todo.trim()==="")return;

    setTodo([...todo,form.todo]);
    clearForm();
  }

  const handleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  }

  const clearForm=()=>{
    setForm({todo:""})
  }

  const handleDelete=(id)=>{

    setTodo(todo.filter((item,index)=>index!==id));

  }
  return (
    <div className="container">

      <center>
        <h1>TO-DO-List-App</h1>
        <input type="text" name="todo" value={form.todo} onChange={handleChange} placeholder='Enter todo' required />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {
            todo.map((item,id)=>(
              <li key={id}>
                {item}{"  "}
                <button onClick={()=>handleDelete(id)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </center>
    </div>
  )
}

export default App