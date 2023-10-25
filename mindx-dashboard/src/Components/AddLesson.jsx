import React from 'react'

const AddLesson = () => {
  return (
    <div>
      <div className='addLesson'>
      <p className='content-title'> Add a lesson</p>
        <label className='login-label'>  Choose  a Language :</label>
        <input type='text'className='login-input'/>
        <label className='login-label'>  Category of the Language</label>
        <input type='text'className='login-input'/>
        <label className='login-label'>  Number of Chapters in the course</label>
        <input type='text'className='login-input'/>
        <label className='login-label'>  Days needed to complete the course</label>
        <input type='text'className='login-input'/>
        <button className='login-button' > Add Language </button>
      </div>
    </div>
  )
}

export default AddLesson
