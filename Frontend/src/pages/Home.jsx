import React from "react";
import styles from "./Home.module.css";
import AppartmentCard from "../components/appartmentCard/AppartmentCard";
import appartmentsData from "../data/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

function Home() {
  return (
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
              <AppartmentCard key={appartment.id} appartment={appartment} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Home;
