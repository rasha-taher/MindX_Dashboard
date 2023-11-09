import React from "react";
import { useState } from "react";

import axios from "axios";
import "../styles/updateComponent.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DialogDelete from "./DialogDelete";
import ModalChapter from "./ModalChapter";

const UpdateContent = ({
  id,
  languageId,
  chapterContent,
  chapterName,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
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
      .delete(`http://localhost:5000/chapter/deleteChapterById/${id}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="updateComponent">
      <div className="updateComponent-div">{chapterName}</div>
      <div className="updateComponent-div">{chapterContent}</div>
      <div className="updateComponent-div">{question1}</div>
      <div className="updateComponent-div">{answer1}</div>
      <div className="updateComponent-div">{question2}</div>
      <div className="updateComponent-div">{answer2}</div>
      <div className="updateComponent-div">{question3}</div>
      <div className="updateComponent-div">{answer3}</div>
      <div className="updateComponent-div">
        <AiFillEdit onClick={showModal} />
      </div>
      {show && (
        <ModalChapter
          show={showModal}
          handleClose={hideModal}
          id={id}
          idLanguage={languageId}
          chapterName={chapterName}
          chapterContent={chapterContent}
          question1={question1}
          answer1={answer1}
          question2={question2}
          answer2={answer2}
          question3={question3}
          answer3={answer3}
        />
      )}

      <AiFillDelete onClick={() => showDialogHandler()} />

      {dialog.isLoading && (
        <DialogDelete onDialog={areYouSure} message={dialog.message} />
      )}
    </div>
  );
};

export default UpdateContent;
