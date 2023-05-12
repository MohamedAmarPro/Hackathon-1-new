import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MyRental from "../components/MyRental/MyRental";
import { StyledEngineProvider } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./MyRentals.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

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

  console.log(apppartment);

  return (
    <StyledEngineProvider>
      <div className={styles.home}>
        <button className={styles.addButton}>
          <Link to="/add">Add New Rental</Link>
        </button>
        <div className={styles.appartmentsContainer}>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {apppartment.map((appartment) => (
              <SwiperSlide>
                <MyRental key={appartment.id} appartment={appartment} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default Rentals;
