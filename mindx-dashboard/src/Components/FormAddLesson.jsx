import React from "react";
import axios from "axios";
import { useState } from "react";

const FormAddLesson = ({ techId }) => {
  const [chapterNubmer, setChapterNumer] = useState("");
  const [imageLanguage, setImageLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [nameLanguage, setNameLanguage] = useState("");
  const [daysComplete, setDaysComlete] = useState("");
  const [error, setError] = useState("");
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
      console.log("2", imageLanguage);
      console.log("Image uploaded successfully:", imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("language_name", nameLanguage);
    formData.append("category_title", category);
    formData.append("teacher_id", techId);
    formData.append("days_to_complete", daysComplete);
    formData.append("nb_of_chapters", chapterNubmer);
    formData.append("language_picture", imageLanguage);
    console.log(formData);
    console.log("3", imageLanguage);
    try {
      await axios
        .post("http://127.0.0.1:8000/language/addLanguage", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })

        .then((response) => {
          if (response) {
            console.log("Skill added successfully:");
            setError("Data added successfully.");
            setNameLanguage("");
            setCategory("");
            setChapterNumer("");
            setDaysComlete("");
            setImageLanguage(null);

            setTimeout(() => {
              setError("");
            }, 10000);
          }
        });
    } catch (error) {
      console.error("An error occurred while adding Skill:", error);
      setError("An error occurred while adding Skill.");
    }
  };
  return (
    <div className="addLesson">
      <p className="content-title"> Add a lesson</p>
      <form
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        <label className="login-label">
          Choose a Language :
          <input
            type="text"
            className="login-input"
            value={nameLanguage}
            onChange={(e) => setNameLanguage(e.target.value)}
          />
        </label>

        <label className="login-label">
          Category of the Language :
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="choose">Choose</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="login-label">
          {" "}
          Number of Chapters in the course :
          <input
            type="number"
            className="login-input"
            value={chapterNubmer}
            onChange={(e) => setChapterNumer(e.target.value)}
          />
        </label>

        <label className="login-label">
          Days needed to complete the course :
          <input
            type="number"
            className="login-input"
            value={daysComplete}
            onChange={(e) => setDaysComlete(e.target.value)}
          />
        </label>

        <label className="login-label">
          Language image :
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>

        <button className="login-button"> Add Language </button>
      </form>
    </div>
  );
};

export default FormAddLesson;
