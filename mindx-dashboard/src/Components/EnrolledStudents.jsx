import React from 'react'

const EnrolledStudents = () => {
  return (
  
      <div>
      <p className='content-title'>Student's Enrolled In Your Courses</p>
      <table className='content-table'>
        <thead>
          <tr>
            <th className='content-data'>Student Id</th>
            <th className='content-data'>Name</th>
            <th className='content-data'>Email</th>
            <th className='content-data'>Password</th>
            <th className='content-data'>Action</th>
          </tr>
        </thead>
        <tbody>
         
              <tr key="">
                <td className='content-data'></td>
                <td className='content-data'></td>
                <td className='content-data'></td>
                <td className='content-data'></td>
                <td className='content-data'>
                  <button
                    className='action-button delete'
                    onClick={() => ""}
                  >
                    Delete
                  </button>
                </td>
              </tr>
        
        </tbody>
      </table>
  </div>
  )
}

export default EnrolledStudents
