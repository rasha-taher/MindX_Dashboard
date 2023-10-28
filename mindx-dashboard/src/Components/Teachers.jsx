import React, { useEffect, useState } from "react";
import axios from "axios";

const Teachers = () => {
  const url = "http://localhost:5000";
  const [data, setData] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = () => {
    const apiUrl = url + "/teacher/getTeacher";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteTeacher = (email) => {
    axios
      .delete(url + `/teacher/deleteTeacher/${email}`)
      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteClick = (email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    deleteTeacher(selectedEmail);
    setIsModalOpen(false);
    setSelectedEmail(null);
  };

  const handleDeleteCancel = () => {
    setIsModalOpen(false);
    setSelectedEmail(null);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p className="content-title">Teacher</p>
      <table className="content-table">
        <thead>
          <tr>
            <th className="content-data"> Name </th>
            <th className="content-data"> Email</th>

            <th className="content-data"> Password </th>
            <th className="content-data"> Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((d) => (
              <tr key={d.id}>
                <td className="content-data"> {d.name}</td>
                <td className="content-data">{d.email} </td>
                <td className="content-data">{d.password} </td>
                <td className="content-data">
                  <button
                    className="action-button delete"
                    onClick={() => handleDeleteClick(d.email)}
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
              <div className="p-box">
              <p>Are you sure you want to delete this item?</p>
              </div>
              <div className=" dec-box">
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
        </div>
      )}
    </div>
  );
};

export default Teachers;
