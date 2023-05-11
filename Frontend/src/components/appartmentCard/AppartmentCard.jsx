import React from "react";
import styles from "./AppartmentCard.module.css";

function AppartmentCard({ appartment }) {
  console.log(appartment);

  return (
    <div className={styles.appartmentCard}>
      <div className={styles.appartmentImageContainer}>
        <img
          className={styles.appartmentImage}
          src={appartment.images}
          alt=""
        />
      </div>
      <div className={styles.appartmentInfosContainer}>
        <h3 className={styles.city}>{appartment.city}</h3>
        <h4 className={styles.appartmentTitle}>{appartment.title}</h4>
        <p className={styles.price}>
          {appartment.price}€ <span className={styles.perNight}>/night</span>
        </p>
      </div>
    </div>
  );
}

export default AppartmentCard;
