import React from 'react'

const TeacherAppoitment = () => {
  return (
    <div>
    <p className='content-title'>All Your Scheduled Appoitments</p>
    <table className='content-table'>
      <thead>
        <tr>
          <th className='content-data'>Appoitments Id</th>
          <th className='content-data'>Appoitment Title</th>
          <th className='content-data'>Date</th>
          <th className='content-data'>Start Time</th>
          <th className='content-data'>End Time</th>
          <th className='content-data'>Student Name</th>
          <th className='content-data'>Teacher Name</th>
          <th className='content-data'>Status</th>
        </tr>
      </thead>
      <tbody>
            <tr key="">
            <td className='content-data'></td>
              <td className='content-data'></td>
              <td className='content-data'></td>
              <td className='content-data'></td>
              <td className='content-data'></td>
              <td className='content-data'> </td>
              <td className='content-data'> </td>
              <td className='content-data'> </td>
            </tr>
      </tbody>
    </table>
    </div>
  )
}

export default TeacherAppoitment
