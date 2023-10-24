import React from 'react'

const Login = () => {
  return (
    <div id='login'>
      <div className='form-container'>
        <label className='login-label'> User Name :</label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Email: </label>
        <input type='text'className='login-input'/>
        <label className='login-label'> Password:  </label>
        <input type='text'className='login-input'/>
        <button className='login-button' > Log In</button>
      </div>
    </div>
  )
}

export default Login
