import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";
import QuizContent from "./QuizContent";
const UpdateQuiz = ({ teachId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res3 = await axios.get(
          `http://127.0.0.1:8000/quiz/getQuizByTeacherId/${teachId}`
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
    <div className="update-main">
      <div className="update">
        <div> language_id</div>
        <div>quiz</div>
        <div>option1</div>
        <div>option2</div>
        <div>option3</div>
        <div>option4</div>
        <div>answer</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {data &&
        data.map((info) => (
          <QuizContent
            id={info.quiz_id}
            languageId={info.language_id}
            quiz={info.quiz}
            option1={info.option1}
            option2={info.option2}
            option3={info.option3}
            option4={info.option4}
            answer={info.answer}
          />
        ))}
    </div>
  );
};

export default UpdateQuiz;
