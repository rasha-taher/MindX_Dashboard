import { useState } from "react";
import "../styles/modal.css";
import axios from "axios";
import { AiFillCloseSquare } from "react-icons/ai";

const ModalChapter = ({
  id,
  idLanguage,
  handleClose,
  show,
  chapterContent,
  chapterName,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
}) => {
    const [languageid, setLanguageid] = useState(idLanguage);
  const [nameChapter, setNameChapter] = useState(chapterName);
  const [contentChapter, setContentChapter] = useState(chapterContent);
  const [oneQuestion, setOneQuestion] = useState(question1);
  const [secondQuestion, setSecondQuestion] = useState(question2);
  const [thirdQuestion, setThirdQuestion] = useState(question3);
  const [oneAnswer, setOneAnswer] = useState(answer1);
  const [secondAnswer, setSecondAnswer] = useState(answer2);
  const [thirdAnswer, setThirdAnswer] = useState(answer3);
  const [error, setError] = useState("");
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_id", languageid);
    formData.append("chapter_title", nameChapter);
    formData.append("chapter_content", contentChapter);
    formData.append("question", oneQuestion);
    formData.append("answer", oneAnswer);
    formData.append("question1", secondQuestion);
    formData.append("answer1", secondAnswer);
    formData.append("question2", thirdQuestion);
    formData.append("answer2", thirdAnswer);
  
    
    try {
      await axios
        .put(
          `http://127.0.0.1:8000/chapter/updateChapterById/${id}`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
.then((response) => {
          window.location.reload();
          alert("added succesful");
        });
    } catch (error) {
      console.error("An error occurred while adding Skill:", error);
      setError("An error occurred while adding Skill.");
    }
  };


  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-contain">
          <AiFillCloseSquare onClick={handleClose} />
          <div className="modal-inside">
            <label style={{ paddingLeft: "5px" }}>
              Chapter Name:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={nameChapter}
                value={nameChapter}
                onChange={(e) => setNameChapter(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Lanuage content :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={contentChapter}
                value={contentChapter}
                onChange={(e) => setContentChapter(e.target.value)}
              />
            </label>

            <label style={{ paddingLeft: "5px" }}>
              Question1 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={oneQuestion}
                value={oneQuestion}
                onChange={(e) => setOneQuestion(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Answer 1 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={oneAnswer}
                value={oneAnswer}
                onChange={(e) => setOneAnswer(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Question2 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={secondQuestion}
                value={secondQuestion}
                onChange={(e) => setSecondQuestion(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
             Answer 2 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={secondAnswer}
                value={secondAnswer}
                onChange={(e) => setSecondAnswer(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Question3 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={thirdQuestion}
                value={thirdQuestion}
                onChange={(e) => setThirdQuestion(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Question1
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={thirdAnswer}
                value={thirdAnswer}
                onChange={(e) => setThirdAnswer(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button
          style={{
            margin: "70px",
            padding: "12px 16px",
            border: " 1px solid white",
            borderRadius: "12px",
            backgroundColor: "#D5A9DB",
            color: "white"
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default ModalChapter;
