import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import FormAddContent from "../Components/FormAddContent";
import UpdateChapter from "./UpdateChapter";

const LessonContent = ({idTeach}) => {
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

  const [languageId, setLanguageId] = useState("");
  const [chapterTitle, setChapterTitle] = useState("");
  const [explanation, setExplanation] = useState("");
  const [question1, setQuestion1] = useState("");
  const [question2, setQuestion2] = useState("");
  const [question3, setQuestion3] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_id", languageId);
    formData.append("chapter_title", chapterTitle);
    formData.append("chapter_content", explanation);
    formData.append("question", question1);
    formData.append("answer", answer1);
    formData.append("question1", question2);
    formData.append("answer1", answer2);
    formData.append("question2", question3);
    formData.append("answer2", answer3);

    try {
      await axios
        .post("http://127.0.0.1:8000/chapter/addChapter", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        .then((response) => {
          if (response) {
            console.log("Skill added successfully:");
            setError("Data added successfully.");

            setChapterTitle("");
            setExplanation("");
            setQuestion1("");
            setQuestion2("");
            setQuestion3("");
            setAnswer3("");
            setAnswer1("");
            setAnswer2("");

            setTimeout(() => {
              setError("");
            }, 10000);
          }
        });
    } catch (error) {
      console.error("An error occurred while adding Skill:", error);
      setError("An error occurred while adding Skill.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res3 = await axios.get(
          `http://127.0.0.1:8000/language/getLanguageByTechearId/${idTeach}`
        );
        console.log("languagec", res3);
        console.log("lang.data", res3.data);

        setData(res3.data.data);
        console.log("id",data.language_id)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
          Add chapter
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
          <FormAddContent teacherId={idTeach} />
        </div>
        <div
          id="dash-add"
          style={{
            display: activeSection === "contentFetch" ? "flex" : "none",
          }}
        >
          <UpdateChapter teacherId={idTeach} />
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
