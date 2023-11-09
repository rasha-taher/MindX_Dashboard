import React, { useState, useEffect } from "react";
import axios from "axios";

const Students = () => {
  const url = "http://localhost:5000";
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/studentInfo/getAllStudents`);
      setData(response.data.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const response = await axios.delete(`${url}/studentInfo/deleteStudent/${id}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    deleteStudent(selectedId);
    setIsModalOpen(false);
    setSelectedId(null);
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false);
    setSelectedId(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className="content-title">Student's Information</p>
      <table className="content-table">
        <thead>
          <tr>
            <th className="content-data">Student Id</th>
            <th className="content-data">Name</th>
            <th className="content-data">Email</th>
            <th className="content-data">Password</th>
            <th className="content-data">Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d) => (
              <tr key={d.id}>
                <td className="content-data">{d.id}</td>
                <td className="content-data">{d.name}</td>
                <td className="content-data">{d.email}</td>
                <td className="content-data">{d.password}</td>
                <td className="content-data">
                  <button
                    className="action-button delete"
                    onClick={() => handleDeleteClick(d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div className="modal-background"></div>
          <div className="modal-content">
            <div className="box">
              <p>Are you sure you want to delete this item?</p>
              <button
                className="button is-danger"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
              <button className="button" onClick={handleDeleteCancel}>
                Cancel
              </button>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={handleDeleteCancel}
          ></button>
        </div>
      )}
    </div>
  );
};

export default Students;
