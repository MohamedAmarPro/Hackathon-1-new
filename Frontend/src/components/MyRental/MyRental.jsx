import React from "react";
import styles from "./MyRental.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function MyRental({ appartment }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(appartment);
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
        <div className={styles.buttonsContainer}>
          <button className={styles.editButton}>
            <Link to={`/update/${appartment.id}`} className={styles.updateLink}>
              Update
            </Link>
          </button>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(appartment.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyRental;
