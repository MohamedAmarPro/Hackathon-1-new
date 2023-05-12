import React from "react";
import styles from "./MyRentals.module.css";
import appartmentsData from "../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import MyRental from "../components/MyRental/MyRental";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Rentals() {
  const [apppartment, setApppartment] = useState([]);

  useEffect(() => {
    const fectchAllAppartment = async () => {
      try {
        const response = await axios.get("http://localhost:8800/myrentals");
        setApppartment(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectchAllAppartment();
  }, []);

  return (
    <StyledEngineProvider>
      <div className={styles.home}>
        <button className={styles.addButton}>
          <Link to="/add">Add New Rental</Link>
        </button>
        <div className={styles.appartmentsContainer}>
          {apppartment.map((appartment) => (
            <MyRental key={appartment.id} appartment={appartment} />
          ))}
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default Rentals;
