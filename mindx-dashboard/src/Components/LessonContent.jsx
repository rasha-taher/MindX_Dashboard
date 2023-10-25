import React from 'react'

const LessonContent = () => {
  return (
    <div>
    <p className='content-title'> Add a lesson</p>
    <div className='addLesson'>


      <label className='login-label'>  Choose  a Language :</label>
      <select className='login-input'>
        <option> Option 1 </option>
        <option> Option 2 </option>
        <option> Option 3 </option>
        <option> Option 4 </option>
        </select>
      <label className='login-label'>  Chapter Title</label>
      <input type='text'className='login-input'/>
      <label className='login-label'>  Explanation </label>
      <textarea type='text'className='login-input lang-exp'/>

      
      <label className='login-label'>  Questions</label>
      <label className='login-label'> Question 1 </label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Answer 1</label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Question 2 </label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Answer 2</label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Question 3 </label>
      <input type='text'className='login-input'/>
      <label className='login-label'> Answer 3</label>
      <input type='text'className='login-input'/>
      <button className='login-button' > Add Content </button>
    </div>
    </div>
  
  )
}

export default LessonContent
