import React, { useState } from 'react'
import './App.css';
const App = () => {

  const [count,setCount]=useState(0);

  const handleIncrement=()=>{
    setCount(count+1);
  }

  const handleDecrement=()=>{
    if(count > 0){
      setCount(count-1);
    }
  }

  const handleReset=()=>{
    setCount(0);
  }
  return (
    <div >
      <center>
      <h1>Counter App</h1>

        <h2>Count : {count}</h2>
      <button onClick={handleIncrement}>+Increment</button>{" "}
      <button onClick={handleDecrement}>-Decrement</button>{" "}
      <button onClick={handleReset}>Reset</button>
      </center>
    </div>
  )
}

export default App