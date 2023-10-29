import LessonContent from "./LessonContent";
import { useState } from "react";
import AddLesson from "./AddLesson";
import Quizz from "./Quizz";
import TeacherAppoitment from "./TeacherAppoitment";
import Students from "./Students";
import EnrolledStudents from "./EnrolledStudents";

const TeacherHome = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleClick = (section) => {
    switch (section) {
      case "Teachers":
        setActiveSection("Teachers");
        break;
      case "quizz":
        setActiveSection("quizz");
        break;
      case "AddLanguage":
        setActiveSection("AddLanguage");
        break;
      case "AddLesson":
        setActiveSection("AddLesson");
        break;
      case "appoitment":
        setActiveSection("appoitment");
        break;
      case "students":
        setActiveSection("students");
        break;
      default:
        setActiveSection(null);
    }
  };
  return (
    <div>
      <div className="dashboard-container">
        <div className="side-menu">
          <p className="dash-title"> MindX</p>

          <ul className="dash-menu-ul">
            <li
              className="dash-menu-li"
              onClick={() => handleClick("AddLanguage")}
            >
              {" "}
              Add A Language
            </li>
            <li
              className="dash-menu-li"
              onClick={() => handleClick("AddLesson")}
            >
              {" "}
              Add Content To Your Language
            </li>
            <li className="dash-menu-li" onClick={() => handleClick("quizz")}>
              {" "}
              Add a Quizz
            </li>
            <li
              className="dash-menu-li"
              onClick={() => handleClick("appoitment")}
            >
              {" "}
              See Your Appoitments
            </li>
            <li
              className="dash-menu-li"
              onClick={() => handleClick("students")}
            >
              {" "}
              Students Enrolled In your Courses
            </li>
          </ul>
        </div>
        <div className="dashboard-content">
          <div
            id="AddLanguage"
            style={{
              display: activeSection === "AddLanguage" ? "block" : "none",
            }}
          >
            <AddLesson />
          </div>

          <div
            id="AddLesson"
            style={{
              display: activeSection === "AddLesson" ? "block" : "none",
            }}
          >
            <LessonContent />
          </div>
          <div
            id="quizz"
            style={{ display: activeSection === "quizz" ? "block" : "none" }}
          >
            <Quizz />
          </div>
          <div
            id="appoitment"
            style={{
              display: activeSection === "appoitment" ? "block" : "none",
            }}
          >
            <TeacherAppoitment />
          </div>
          <div
          id="students"
          style={{ display: activeSection === "students" ? "block" : "none" }}
        >
          <EnrolledStudents />
        </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherHome;
