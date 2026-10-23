import React, { useState } from 'react'
import NumsContext from './NumsContext';
import Sum from './Sum';
import Mul from './Mul';
import Diff from './Diff';
import ObjectContext from './ObjectContext';
import ShowEmp from './ShowEmp';
import ThemeContext from './ThemeContext';
import Home from './Home';

const App = () => {
  let a = 10;
  let b = 3;

  const employee={name:'nikita',role:'dev',salary:212344}

  const [dark,setDark]=useState(false);
  return (
    <div>
    <center>
     <h1>Welcome to my context app</h1> 
      ==========================================

      <ThemeContext.Provider value={{dark,setDark}}>
       <div
        style={{
          backgroundColor: dark ? '#222' : '#fff',
          color: dark ? '#fff' : '#222',
          minHeight: '100vh',
          padding: '20px',
          textAlign: 'center'
        }}
      >
      <Home/>
      </div>
      </ThemeContext.Provider>

    <NumsContext.Provider value={{a,b}}>
      <Sum/>
      <Mul/>
      <Diff/>
      </NumsContext.Provider>
      <ObjectContext.Provider value={employee}>
          <ShowEmp/>
      </ObjectContext.Provider>
    </center>

    </div>
  )
}

export default App
