import { useState } from "react";
import "../styles/modal.css";
import axios from "axios";
import { AiFillCloseSquare } from "react-icons/ai";

const Modal = ({
  id,
  handleClose,
  show,
  techId,
  languageName,
  languageCategory,
  numberOfChapter,
  daysToComplete,
  languagePicture,
}) => {
  const [chapterNubmer, setChapterNumer] = useState(numberOfChapter);
  const [category, setCategory] = useState(languageCategory);
  const [nameLanguage, setNameLanguage] = useState(languageName);
  const [daysComplete, setDaysComlete] = useState(daysToComplete);
  const [imageLanguage, setImageLanguage] = useState(languagePicture);
  

  const [error, setError] = useState("");
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      console.error("No file selected");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await axios.post(
        "https://api.imgbb.com/1/upload?key=bbcd50b7dd192c1a72a483807776ccb1",
        formData
      );
      const imageUrl = response.data.data.url;
      setImageLanguage(imageUrl);
      console.log("1", imageUrl);

      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  console.log("2", imageLanguage);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_name", nameLanguage);
    formData.append("teacher_id", techId);
    formData.append("category_title", category);
    formData.append("days_to_complete", daysComplete);
    formData.append("nb_of_chapters", chapterNubmer);
    formData.append("language_picture", imageLanguage);
    console.log(formData);
    console.log("3", imageLanguage);
    try {
      await axios
        .put(
          `http://127.0.0.1:8000/language/updateLanguageById/${id}`,
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
              Lanuage Name:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={nameLanguage}
                value={nameLanguage}
                onChange={(e) => setNameLanguage(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Lanuage Category:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="text"
                placeholder={category}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>

            <label style={{ paddingLeft: "5px" }}>
              Number of Chapter:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="number"
                placeholder={chapterNubmer}
                value={chapterNubmer}
                onChange={(e) => setChapterNumer(e.target.value)}
              />
            </label>
            <label style={{ paddingLeft: "5px" }}>
              Days to complete:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="number"
                placeholder={daysComplete}
                value={daysComplete}
                onChange={(e) => setDaysComlete(e.target.value)}
              />
            </label>
            <div className="img-div">
              <img src={imageLanguage} alt="" className="img-modal" />
            </div>

            <label style={{ paddingLeft: "5px" }}>
              language Picture:
              <input
                style={{ padding: "5px", marginLeft: "10px" }}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
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
            color: "white",
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </section>
    </div>
  );
};
export default Modal;
