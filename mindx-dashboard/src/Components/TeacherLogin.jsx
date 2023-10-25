import React from 'react'
import { Link } from "react-router-dom";

const TeacherLogin = () => {
  return (
    <div>
      <div id='login'>
      <div className='form-container'>
        <h1> Teacher Login</h1>
        <label className='login-label'> User Name :</label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Email: </label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Password:  </label>
        <input type='text'className='login-input'/>
        <button className='login-button' >  <Link to="/TeacherHome">Log In </Link> </button>
      </div>
    </div>
    </div>
  )
}

export default TeacherLogin
