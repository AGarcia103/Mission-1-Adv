import React from "react";
import styles from "./FindACar.module.css";
import axios from "axios";
import FormData from "form-data";
// import { useEffect } from "react";
import { useState } from "react";

export const FindACar = () => {
  const [image, setImage] = useState(null);

  const handleFileUpload = (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0], e.target.files[0].name);
    setImage(formData);
    
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:3001/car", image)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
  }

  const searchHandler = () => {
    
  };

  return (
    <div className={styles.search_container}>
      <div className={styles.wrapper}>
        <div className={styles.input_search}>
          <input type="search"></input>
          <div className={styles.search_btn}>
            Search
          </div>
          <input
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => handleFileUpload(e)}
          ></input>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>

        <div className={styles.search_content}>Cars will be displayed here</div>
      </div>
    </div>
  );
};
