import React from 'react'
import Logout from './Logout'

const Dashboard = () => {
  return (
    <div>
      <h2>Login Success... Welcome to Dashboard ..{localStorage.getItem("userInfo")}</h2>
      <br/><br/>
     <Logout/>
    </div>
  )
}

export default Dashboard
