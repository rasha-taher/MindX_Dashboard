import React from "react";
import { useState, useEffect } from "react";
import "../styles/update.css";
import axios from "axios";
import UpdateContent from "../Components/UpdateContent";
const UpdateChapter = ({ teacherId }) => {
 
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res3 = await axios.get(
          `http://127.0.0.1:8000/chapter/getChapterByLanguageId/${teacherId}`
        );
        console.log("res3c", res3);
        setData(res3.data.data);
        console.log("d", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="update-main">
      <div className="update">
        <div>Chapter Title</div>
        <div>Chapter content</div>
        <div>Question 1</div>
        <div>answer1</div>
        <div>Question 2</div>
        <div>answer2</div>
        <div>Question 3</div>
        <div>answer 3</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {data &&
        data.map((info) => (
          <UpdateContent
            id={info.language_content_id}
            languageId={info.language_id}
            chapterContent={info.chapter_content}
            chapterName={info.chapter_title}
            question1={info.question}
            answer1={info.answer}
            question2={info.question1}
            answer2={info.answer1}
            question3={info.question2}
            answer3={info.answer2}
          />
        ))}
    </div>
  );
};

export default UpdateChapter;
