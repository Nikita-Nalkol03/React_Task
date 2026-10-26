import React from 'react'
import Diff from './Diff'
import Sum from './Sum'
import Cart from './Cart'

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcome to Redux App</h1>
        <Sum/>
        <Diff/>
        <Cart/>
      </center>
    </div>
  )
}

export default App