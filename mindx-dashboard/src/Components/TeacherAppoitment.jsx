import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const TeacherAppoitment = () => {
  const [teacherId, setTeacherId] = useState("");

  useEffect(() => {
    // Retrieve the teacherId from the cookie when the component mounts
    const storedTeacherId = Cookies.get("teacherId");

    if (storedTeacherId) {
      setTeacherId(storedTeacherId);
    }
  }, []);
  const url = "http://localhost:5000";
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchData = () => {
    const teacherId = Cookies.get("teacherId");
    const apiUrl = url + `/appoitment/getAppById/${teacherId}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const deleteStudent = (id) => {
    axios
      .delete(url + `/appoitment/delete/${id}`)
      .then((response) => {
        console.log(response.data);
        fetchData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      <p className="content-title">Appoitment</p>
      <table className="content-table">
        <thead>
          <tr>
            <th className="content-data">Appoitment_Name</th>
            <th className="content-data">Appoitment_Date</th>
            <th className="content-data">Appoitment_Start_Time</th>
            <th className="content-data">Appoitment_End_Time</th>
            <th className="content-data">Status </th>
            <th className="content-data">Student_ID</th>
            <th className="content-data">Teacher_ID</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((data1) => (
              <tr key={data1.appoitment_id}>
                <td className="content-data">{data1.appoitment_name}</td>
                <td className="content-data">{data1.appoitment_date}</td>
                <td className="content-data">{data1.appoitment_start_time}</td>
                <td className="content-data">{data1.appoitment_end_time}</td>
                <td className="content-data">{data1.status}</td>
                <td className="content-data">{data1.student_id}</td>
                <td className="content-data">{data1.teacher_id}</td>
                <td className="content-data">
                  <button
                    className="action-button delete"
                    onClick={() => handleDeleteClick(data1.appoitment_id)}
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

export default TeacherAppoitment;
