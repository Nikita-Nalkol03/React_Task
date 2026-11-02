import React from 'react'
import User from './User'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/user" element={<User/>}/>
      </Routes>
    
    </div>
  )
}

export default App