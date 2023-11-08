import { useState } from "react";

import axios from "axios";
import "../styles/updateComponent.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DialogDelete from "./DialogDelete";
import ModalQuiz from "./ModalQuiz";
const QuizContent = ({
  id,
  languageId,
  quiz,
  option1,
  option2,
  option3,
  option4,
  answer,
}) => {
  const [show, setShow] = useState(false);
  const [dialog, setDialog] = useState({ message: "", isLoading: false });
  const [back, setBack] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => {
    setShow(false);
  };
  function areYouSure(choose) {
    console.log("funare");
    if (choose) {
      setBack(true);
      deleteLanguageHandler(id);
      setDialog({ message: "", isLoading: false });
      window.location.reload();
    } else {
      setBack(false);
      setDialog({ message: "", isLoading: false });
    }
  }
  const showDialogHandler = () => {
    setDialog({
      message: "are you sure to delete?",
      isLoading: true,
    });
  };

  const deleteLanguageHandler = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/quiz/deleteQuizById/${id}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="updateComponent">
      <div className="updateComponent-div">{id}</div>
      <div className="updateComponent-div">{languageId}</div>
      <div className="updateComponent-div">{quiz}</div>
      <div className="updateComponent-div">{option1}</div>
      <div className="updateComponent-div">{option2}</div>
      <div className="updateComponent-div">{option3}</div>
      <div className="updateComponent-div">{option4}</div>
      <div className="updateComponent-div">{answer}</div>

      <div className="updateComponent-div">
        <AiFillEdit onClick={showModal} />
      </div>
      {show && (
        <ModalQuiz
          show={showModal}
          handleClose={hideModal}
          id={id}
          languageId={languageId}
          quiz={quiz}
          option1={option1}
          option2={option2}
          option3={option3}
          option4={option4}
          answer={answer}
        />
      )}

      <AiFillDelete onClick={() => showDialogHandler()} />

      {dialog.isLoading && (
        <DialogDelete onDialog={areYouSure} message={dialog.message} />
      )}
    </div>
  );
};

export default QuizContent;
