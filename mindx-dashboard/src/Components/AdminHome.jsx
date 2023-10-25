import Teachers_reequest from "./Teachers_reequest";
import Teachers from "./Teachers";
import { useState } from "react";
import Users from "./Users";

function AdminHome() {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    switch (section) {
      case "teachers_request":
        setActiveSection("teachers_request");
        break;
      case "Teachers":
        setActiveSection("Teachers");
        break;
      case "users":
        setActiveSection("users");
        break;
      case "lessons":
        setActiveSection("lessons");
        break;
      default:
        setActiveSection(null);
    }
  };
  return (
    <div className="dashboard-container">
      <div className="side-menu">
        <p className="dash-title"> MindX</p>
        <ul className="dash-menu-ul">
          <li
            className="dash-menu-li"
            onClick={() => handleClick("teachers_request")}
          >
            {" "}
            Teacher's Request
          </li>
          <li className="dash-menu-li" onClick={() => handleClick("Teachers")}>
            {" "}
            Teachers
          </li>
          <li className="dash-menu-li" onClick={() => handleClick("lessons")}>
            {" "}
            Lessons
          </li>
          <li className="dash-menu-li" onClick={() => handleClick("users")}>
            {" "}
            Users
          </li>
        </ul>
      </div>
      <div className="dashboard-content">
        <div
          id="teachers_request"
          style={{
            display: activeSection === "teachers_request" ? "block" : "none",
          }}
        >
          <Teachers />
        </div>
        <div
          id="Teachers"
          style={{ display: activeSection === "Teachers" ? "block" : "none" }}
        >
          <Teachers_reequest />
        </div>
        <div
          id="users"
          style={{ display: activeSection === "users" ? "block" : "none" }}
        >
          <Users />
        </div>
      </div>
    </div>
  );
}

export default AdminHome;
