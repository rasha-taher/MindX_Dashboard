import React from "react";

import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div id="home" className="home">

      <div className="home-container">

        <button className="login-button ">
          <Link to="/AdminLogin">Admin </Link>
        </button>

        <button className="login-button ">
        <Link to="/TeacherLogin"> Teacher </Link></button>
      </div>
    </div>
  );
};

export default Dashboard;
