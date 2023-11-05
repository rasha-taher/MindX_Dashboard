import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/update.css";
import UpdateComponent from "../Components/UpdateComponent";
const Update = ({ techId }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res3 = await axios.get(
          `http://127.0.0.1:8000/language/getLanguageByTechearId/${techId}`
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
        <div>Language Name</div>
        <div>Language Category</div>
        <div>number Of Chapter</div>
        <div>days to Complete</div>
        <div>languagePicture</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      {data &&
        data.map((info) => (
          <UpdateComponent
            
            id={info.language_id}
            idTech={techId}
            languageName={info.language_name}
            languageCategory={info.category_title}
            numberOfChapter={info.nb_of_chapters}
            daysToComplete={info.days_to_complete}
            languagePicture={info.language_picture}
          />
        ))}
    </div>
  );
};

export default Update;
