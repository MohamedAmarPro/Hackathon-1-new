import React from "react";
import styles from "./MyRental.module.css";

function MyRental({ title, images, city }) {
  return (
    <div className={styles.generalElementsMyRentals}>
      <div className={styles.elementsMyRentals}>
        <h1 className={styles.titleMyRental}>{title}</h1>
        <img className={styles.imageMyRental} src={images}></img>
        <h2 className={styles.cityMyRental}>{city}</h2>
      </div>

      <div className={styles.buttonsMyRental}>
        <button className={styles.updateMyRental}>update</button>
        <button className={styles.deleteMyRental}>delete</button>
      </div>
    </div>
  );
}

export default MyRental;
