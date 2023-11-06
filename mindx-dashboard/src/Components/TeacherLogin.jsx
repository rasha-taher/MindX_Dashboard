import React, { useState } from "react";
import Cookies from "js-cookie"; // Import the Cookies module

const TeacherLogin = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async () => {
    const response = await fetch("http://localhost:5000/teacher/teacherLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      Cookies.set("teacherId", data.data[0].id, { expires: 7 }); // Set the teacherId in a cookie that expires in 7 days
      window.location.href = "/TeacherHome";
    } else {
      alert("One of the information is incorrect");
    }
  };

  return (
    <div id="login">
      <div className="form-container">
        <h2>Teacher Login</h2>
        <label className="login-label">User Name:</label>
        <input
          type="text"
          className="login-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="login-label">Email:</label>
        <input
          type="text"
          className="login-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label className="login-label">Password:</label>
        <input
          type="password"
          className="login-input"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default TeacherLogin;
