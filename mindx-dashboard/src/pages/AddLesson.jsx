import React from 'react'
import { useState } from 'react';
import FormAddLesson from '../Components/FormAddLesson';
import Update from './Update';

const AddLesson = ({ idTeach }) => {
  const [activeSection, setActiveSection] = useState("default");
  const handleClick = (section) => {
    switch (section) {
      case "add":
        setActiveSection("contentAdd");
        break;
      case "upadte&delete":
        setActiveSection("contentFetch");
        break;

      default:
        setActiveSection("default");
    }
  };
  return (
    <div className="addLanguage">
      <div className="addLanguageHeader">
        <button
          style={{
            color: "white",
            padding: "10px",
            backgroundColor: " #d5a9db",
            border: "1px solid white",
            borderRadius: "13px",
          }}
          onClick={() => handleClick("add")}
        >
          Add Language
        </button>

        <button
          style={{
            color: "white",
            padding: "10px",
            backgroundColor: " #d5a9db",
            border: "1px solid white",
            borderRadius: "13px",
          }}
          onClick={() => handleClick("upadte&delete")}
        >
          Update and Delete
        </button>
      </div>
      <div className="addLanguageContain">
        <div
          id="dash-add"
          style={{ display: activeSection === "contentAdd" ? "flex" : "none" }}
        >
          <FormAddLesson techId={idTeach} />
        </div>
        <div
          id="dash-add"
          style={{
            display: activeSection === "contentFetch" ? "flex" : "none",
          }}
        >
          <Update techId={idTeach} />
        </div>
      </div>
    </div>
  );
};

export default AddLesson
