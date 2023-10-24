import React from 'react'

const Teachers_reequest = () => {
  return (
    <div>
       <p className='content-title'>
            Teacher's Request
          </p>
          <table className=' content-table'> 
            <tr>
               <td className='content-data'> Name </td>
               <td className='content-data'> Email</td>
               <td className='content-data'> Message </td>
               <td className='content-data'> Action</td>
            </tr>
            <tr>
               <td className='content-data'> Rasha </td>
               <td className='content-data'> rasha@gmail.com</td>
               <td className='content-data'> some text message </td>
               <td className='content-data'>
                 <button className='action-button add'> Add</button>
                 <button className='action-button delete'> Delete</button>
                 </td>
            </tr>
          </table>

    </div>
  )
}

export default Teachers_reequest
