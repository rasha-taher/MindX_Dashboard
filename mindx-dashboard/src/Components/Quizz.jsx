import React from 'react'

const Quizz = () => {
  return (
    <div className='quiz'id='quiz'>
      <label className='login-label'>  Add Question to your Language Quiz</label>

      <label className='login-label'>  Choose  a Language :</label>
      <select className='login-input'>
        <option> Option 1 </option>
        <option> Option 2 </option>
        <option> Option 3 </option>
        <option> Option 4 </option>
        </select>

      <label className='login-label'> Question </label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Option 1</label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Option 2 </label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Option 3</label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Option 4 </label>
      <input type='text'className='login-input'/>
      
      <button className='login-button' > Add Quizz Question</button>
    </div>
    
  )
}

export default Quizz
