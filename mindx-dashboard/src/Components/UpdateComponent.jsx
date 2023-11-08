import { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import "../styles/updateComponent.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import DialogDelete from "./DialogDelete";
const UpdateComponent = ({
  id,
  idTech,
  languageName,
  languageCategory,
  numberOfChapter,
  daysToComplete,
  languagePicture,
}) => {
  console.log("key1", id);
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
      .delete(`http://localhost:5000/language/deleteLanguageById/${id}`)
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="updateComponent">
      <div className="updateComponent-div">{id}</div>
      <div className="updateComponent-div">{languageName}</div>
      <div className="updateComponent-div">{languageCategory}</div>
      <div className="updateComponent-div">{daysToComplete}</div>
      <div className="updateComponent-div">{numberOfChapter}</div>
      <div className="updateComponent-div-pic">{languagePicture}</div>
      <div className="updateComponent-div">
        <AiFillEdit onClick={showModal} />
      </div>
      {show && (
        <Modal
          show={showModal}
          handleClose={hideModal}
          id={id}
          techId={idTech}
          languageName={languageName}
          languageCategory={languageCategory}
          daysToComplete={daysToComplete}
          numberOfChapter={numberOfChapter}
          languagePicture={languagePicture}
        />
      )}

      <AiFillDelete onClick={() => showDialogHandler()} />

      {dialog.isLoading && (
        <DialogDelete onDialog={areYouSure} message={dialog.message} />
      )}
    </div>
  );
};

export default UpdateComponent;
