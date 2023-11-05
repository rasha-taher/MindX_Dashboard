import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
const FormAddContent = ({ teacherId }) => {
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
            alert("added chapter succesful");
            window.location.reload();
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
          `http://127.0.0.1:8000/language/getLanguageByTechearId/${teacherId}`
        );
        console.log("res3", res3);
        console.log("res3.data", res3.data);

        setData(res3.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="content-title"> Add a lesson</p>
      <div className="addLesson">
        <form
          style={{ display: "flex", flexDirection: "row", columnGap: "20px" }}
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
          >
            <label className="login-label">
              Choose a Language :
              <select
                value={languageId}
                onChange={(e) => setLanguageId(e.target.value)}
              >
                {data &&
                  data.map((info) => (
                    <option
                      className="login-input"
                      key={info.language_id}
                      value={info.language_id}
                    >
                      {info.language_name}
                    </option>
                  ))}
              </select>
            </label>
            <label className="login-label">
              Chapter Title :
              <input
                type="text"
                className="login-input"
                value={chapterTitle}
                onChange={(e) => setChapterTitle(e.target.value)}
              />
            </label>
            <label
              className="login-label"
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "5px",
              }}
            >
              Explanation :
              <textarea
                type="text"
                className="login-input lang-exp"
                value={explanation}
                onChange={(e) => setExplanation(e.target.value)}
              />
            </label>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <label className="login-label">
              Question 1 :
              <input
                type="text"
                className="login-input"
                value={question1}
                onChange={(e) => setQuestion1(e.target.value)}
              />
            </label>
            <label className="login-label">
              Answer 1 :
              <input
                type="text"
                className="login-input"
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              />
            </label>{" "}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <label className="login-label">
              Question 2 :
              <input
                type="text"
                className="login-input"
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)}
              />
            </label>
            <label className="login-label">
              Answer 2 :
              <input
                type="text"
                className="login-input"
                value={answer2}
                onChange={(e) => setAnswer2(e.target.value)}
              />
            </label>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}
          >
            <label className="login-label">
              {" "}
              Question 3 :
              <input
                type="text"
                className="login-input"
                value={question3}
                onChange={(e) => setQuestion3(e.target.value)}
              />
            </label>
            <label className="login-label">
              Answer 3 :
              <input
                type="text"
                className="login-input"
                value={answer3}
                onChange={(e) => setAnswer3(e.target.value)}
              />
            </label>
            <button className="login-button"> Add Content </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormAddContent;
