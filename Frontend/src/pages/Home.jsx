import React from "react";
import AppartmentCard from "../components/appartmentCard/AppartmentCard";
import { StyledEngineProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Home.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Home() {
  const [apppartment, setApppartment] = useState([]);

  useEffect(() => {
    const fectchAllAppartment = async () => {
      try {
        const response = await axios.get("http://localhost:8800/");
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
                <AppartmentCard
                  key={`id_${appartment.id}`}
                  appartment={appartment}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </StyledEngineProvider>
  );
}

export default Home;
