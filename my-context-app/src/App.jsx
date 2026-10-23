import React from 'react'
import NumsContext from './NumsContext';
import Sum from './Sum';
import Mul from './Mul';
import Diff from './Diff';

const App = () => {
  let a = 10;
  let b = 3;

  return (
    <div>
    <center>
     <h1>Welcome to my context app</h1> 
      ==========================================

    <NumsContext.Provider value={{a,b}}>
      <Sum/>
      <Mul/>
      <Diff/>
      </NumsContext.Provider>
    </center>

    </div>
  )
}

export default App
