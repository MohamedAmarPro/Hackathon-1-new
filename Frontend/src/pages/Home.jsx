import React from "react";
import styles from "./Home.module.css";
import AppartmentCard from "../components/appartmentCard/AppartmentCard";
import appartmentsData from "../data/data.json";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.appartmentsContainer}>
        {appartmentsData.map((appartment) => (
          <AppartmentCard key={appartment.id} appartment={appartment} />
        ))}
      </div>
    </div>
  );
}

export default Home;
