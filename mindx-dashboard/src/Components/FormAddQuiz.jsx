import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const FormAddQuiz = ({ teachId }) => {
  const [data, setData] = useState([]);
  const [languageId, setLanguageId] = useState("");
  const [grade, setGrade] = useState("25");
  const [teacher, setTeacher] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [quiz, setQuiz] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_id", languageId);
    formData.append("grade", grade);
    formData.append("quiz", quiz);
    formData.append("option1", option1);
    formData.append("option2", option2);
    formData.append("option3", option3);
    formData.append("option4", option4);
    formData.append("answer", answer);

    try {
      await axios
        .post("http://localhost:5000/quiz/addQuiz", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        .then((response) => {
          if (response) {
            setError("Data added successfully.");
            setLanguageId("");
            setQuiz("");
            setOption1("");
            setOption2("");
            setOption3("");
            setOption4("");
            setAnswer("");

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
          `http://localhost:5000/language/getLanguageByTechearId/${teachId}`
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
    <div className="quiz" id="quiz">
      <label className="login-label"> Add Question to your Language Quiz</label>
      <form
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className="login-label">
          Choose a Language :
          <select
            value={languageId}
            onChange={(e) => setLanguageId(e.target.value)}
          >
            <option className="login-input">choose language: </option>
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
          {" "}
          Question
          <input
            type="text"
            className="login-input"
            value={quiz}
            onChange={(e) => setQuiz(e.target.value)}
          />
        </label>
        <label className="login-label">
          {" "}
          Option 1
          <input
            type="text"
            className="login-input"
            value={option1}
            onChange={(e) => setOption1(e.target.value)}
          />
        </label>
        <label className="login-label">
          {" "}
          Option 2
          <input
            type="text"
            className="login-input"
            value={option2}
            onChange={(e) => setOption2(e.target.value)}
          />{" "}
        </label>
        <label className="login-label">
          {" "}
          Option 3
          <input
            type="text"
            className="login-input"
            value={option3}
            onChange={(e) => setOption3(e.target.value)}
          />
        </label>
        <label className="login-label">
          {" "}
          Option 4
          <input
            type="text"
            className="login-input"
            value={option4}
            onChange={(e) => setOption4(e.target.value)}
          />
        </label>
        <label className="login-label">
          {" "}
          answer
          <input
            type="text"
            className="login-input"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </label>

        <button type="submit" className="login-button">
          {" "}
          Add Quiz Question
        </button>
      </form>
    </div>
  );
};

export default FormAddQuiz;
