import React from 'react'
import { Link } from "react-router-dom";
const AdminLogin = () => {

  return (
    <div id='login'>
      <div className='form-container'>
        <h2> Admin Login</h2>
        <label className='login-label'> User Name :</label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Email: </label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Password:  </label>
        <input type='text'className='login-input'/>
        <button className='login-button' >  <Link to="/AdminHome">Log In </Link> </button>
      </div>
    </div>
  )
}

export default AdminLogin
