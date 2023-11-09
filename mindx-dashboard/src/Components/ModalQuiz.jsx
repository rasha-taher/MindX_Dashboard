import { useState } from "react";
import "../styles/modal.css";
import axios from "axios";
import { AiFillCloseSquare } from "react-icons/ai";
const ModalQuiz = ({
  show,
  handleClose,
  id,
  languageId,
  quiz,
  option1,
  option2,
  option3,
  option4,
  answer,
}) => {
  const [question, setQuestion] = useState(quiz);
  const [grade, setGrade] = useState("25");
  const [optionOne, setOptionOne] = useState(option1);
  const [optionTwo, setOptionTwo] = useState(option2);
  const [optionThree, setOptionThree] = useState(option3);
  const [optionfour, setOptionFour] = useState(option4);
  const [answer1, setAnswer1] = useState(answer);
  const [error, setError] = useState("");
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_id", languageId);
    formData.append("quiz", quiz);
    formData.append("grade", grade);
    formData.append("option1", optionOne);
    formData.append("option2", optionTwo);
    formData.append("option3", optionThree);
    formData.append("option4", optionfour);
    formData.append("answer", answer1);

    try {
      await axios
        .put(`http://localhost:5000/quiz/updateQuizById/${id}`, formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
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
          <AiFillCloseSquare
            onClick={handleClose}
            style={{
              backgroundColor: "#D5A9DB !important",
              color: "white !important",
            }}
          />
          <div className="modal-inside">
            <label style={{ paddingLeft: "5px" }}>
              Quiz :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={question}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Option 1 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={optionOne}
                value={optionOne}
                onChange={(e) => setOptionOne(e.target.value)}
              />
            </label>

            <label style={{ paddingLeft: "5px" }}>
              Option 2 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={optionTwo}
                value={optionTwo}
                onChange={(e) => setOptionTwo(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Option 3 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={optionThree}
                value={optionThree}
                onChange={(e) => setOptionThree(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Option 4 :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={optionfour}
                value={optionfour}
                onChange={(e) => setOptionFour(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Answer :
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={answer1}
                value={answer1}
                onChange={(e) => setAnswer1(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          style={{
            margin: "70px",
            padding: "12px 16px",
            border: " 1px solid white",
            borderRadius: "12px",
            backgroundColor: "#D5A9DB",
            color: "white",
          }}
        >
          Submit
        </button>
      </section>
    </div>
  );
};

export default ModalQuiz;
