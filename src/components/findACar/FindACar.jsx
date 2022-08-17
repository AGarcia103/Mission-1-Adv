import React from "react";
import styles from "./FindACar.module.css";
import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

export const FindACar = () => {
  // const [cars_data, setCars_data] = useState();

  const searchHandler = () => {};

  const data = {
    header: {
      'Content-Type': 'multipart/form-data'
    }
  }

  const handleFileUpload = (e) => {
    if (e.target.files[0]) {
      axios.post('http://localhost:3001/', data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    }
  }

  return (
    <div className={styles.search_container}>
      <div className={styles.wrapper}>
        <div className={styles.input_search}>
          <input type="search"></input>
          <div className={styles.search_btn} onClick={searchHandler()}>
            Search
          </div>
          <input type='file' accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleFileUpload(e)} ></input>
        </div>

        <div className={styles.search_content}>Cars will be displayed here</div>
      </div>
    </div>
  );
};
