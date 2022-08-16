import React from "react";
import styles from "./FindACar.module.css";
// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";

export const FindACar = () => {
  // const [cars_data, setCars_data] = useState();

  // const options = {
  //   params: { limit: "10", page: "0" },
  //   headers: {
  //     // 'X-RapidAPI-Key': '466ed600b7mshbf9aa0ca80277cbp1a919cjsnb46a8dcbbc88',
  //     "X-RapidAPI-Host": "car-data.p.rapidapi.com",
  //   },
  // };

  const searchHandler = () => {};

  // useEffect(() => {
  //   axios
  //     .get("https://car-data.p.rapidapi.com/cars?limit=10&page=0", options)
  //     .then((res) => setCars_data(res.data))
  //     .catch((err) => console.log(err));
  // });

  const handleFileUpload = (e) => {
    console.log(e.target.files[0])
  }

  return (
    <div className={styles.search_container}>
      <div className={styles.wrapper}>
        <div className={styles.input_search}>
          <input type="search"></input>
          <div className={styles.search_btn} onClick={searchHandler()}>
            Search
          </div>
          <input type='file' accept="image/png, image/jpeg, image/jpg" onChange={(e) => handleFileUpload(e)}></input>
        </div>

        <div className={styles.search_content}>Cars will be displayed here</div>
      </div>
    </div>
  );
};
