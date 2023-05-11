import React from "react";
import data from "../data/data.json";
import MyRental from "../components/MyRental/MyRental";
//import styles from "../components/MyRental/MyRental";
import styles from "./MyRentals.module.css";


function MyRentals() {
  return (
    <div className={styles.elements}>
      {data.map((flat) => (
        <MyRental title={flat.title} images={flat.images} city={flat.city} />
      ))}
      
    </div>
  )
}

export default MyRentals;
