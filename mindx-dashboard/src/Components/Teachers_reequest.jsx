import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeachersRequest = () => {
  const url="http://localhost:5000"

  const [data, setData] = useState([]);

  const fetchData = () => {
    const apiUrl = url+"/request/getRequests";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteRequestById = (id) => {
    axios
      .delete(url+`/request/deleteRequest/${id}`)
      .then((response) => {
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className='content-title'>
        Teacher's Request
      </p>
      <table className='content-table'>
        <thead>
          <tr>
            <th className='content-data'> Id </th>
            <th className='content-data'> Name </th>
            <th className='content-data'> Email</th>
            <th className='content-data'> Message </th>
            <th className='content-data'> Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d) => (
              <tr key={d.request_id}>
                <td className='content-data'> {d.request_id}</td>
                <td className='content-data'> {d.teacher_name}</td>
                <td className='content-data'>{d.teacher_email} </td>
                <td className='content-data'> {d.message} </td>
                <td className='content-data'>
                  <button
                    className='action-button delete'
                    onClick={() => deleteRequestById(d.request_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeachersRequest;
