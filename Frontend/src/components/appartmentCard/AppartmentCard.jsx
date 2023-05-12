import React from "react";
import InfosModal from "./infosModal/InfosModal";
import styles from "./AppartmentCard.module.css";

function AppartmentCard({ appartment }) {
  return (
    <div className={styles.appartmentCard}>
      <div className={styles.appartmentImageContainer}>
        <img
          className={styles.appartmentImage}
          src={
            appartment.images === ""
              ? "../../../public/No_image_available.svg.png"
              : appartment.images
          }
          alt=""
        />
      </div>
      <div className={styles.appartmentInfosContainer}>
        <h3 className={styles.city}>{appartment.city}</h3>
        <h4 className={styles.appartmentTitle}>{appartment.title}</h4>
        <p className={styles.price}>
          {appartment.price}€ <span className={styles.perNight}>/night</span>
        </p>
        <div className={styles.moreInfoContainer}>
          <InfosModal appartment={appartment} />
        </div>
      </div>
    </div>
  );
}

export default AppartmentCard;
