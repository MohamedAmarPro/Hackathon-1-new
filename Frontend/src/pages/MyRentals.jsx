import React from "react";
import styles from "./Home.module.css";
import appartmentsData from "../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import MyRental from "../components/MyRental/MyRental";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { StyledEngineProvider } from "@mui/material/styles";

function MyRentals() {
  return (
    <StyledEngineProvider>
      <div className={styles.home}>
        <div className={styles.appartmentsContainer}>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {appartmentsData.map((appartment) => (
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

export default MyRentals;
