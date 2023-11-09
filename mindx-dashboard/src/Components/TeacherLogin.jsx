import React, { useState } from "react";
import Cookies from "js-cookie"; 

>>>>>>> cc18a253fafd543cfd5e8173d8452c8a78c74fbe
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
<<<<<<< HEAD
      localStorage.setItem("objectGreeting", data.data[0].id);

=======
      Cookies.set("teacherId", data.data[0].id, { expires: 7 }); // Set the teacherId in a cookie that expires in 7 days
>>>>>>> cc18a253fafd543cfd5e8173d8452c8a78c74fbe
      window.location.href = "/TeacherHome";
    } else {
      alert("One of the information is incorrect");
    }
  };
<<<<<<< HEAD
  return (
    <div id="login">
      <div className="form-container">
        <h2> Teacher Login</h2>
        <label className="login-label"> User Name :</label>
=======

  return (
    <div id="login">
      <div className="form-container">
        <h2>Teacher Login</h2>
        <label className="login-label">User Name:</label>
>>>>>>> cc18a253fafd543cfd5e8173d8452c8a78c74fbe
        <input
          type="text"
          className="login-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <label className="login-label"> Email: </label>
=======
        <label className="login-label">Email:</label>
>>>>>>> cc18a253fafd543cfd5e8173d8452c8a78c74fbe
        <input
          type="text"
          className="login-input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <label className="login-label"> Password: </label>
=======
        <label className="login-label">Password:</label>
>>>>>>> cc18a253fafd543cfd5e8173d8452c8a78c74fbe
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
