import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    const fectchAllAppartment = async () => {
      try {
        const response = await axios.get("http://localhost:8800/");
        console.log(response);
        setAppartments(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectchAllAppartment();
  }, []);

  return(<>
  <div className={styles.home}>Apparts</div>


<div className="appartments">
  {appartments &&
    appartments.map((appartment) => (
      <div className="appartment" key={appartment.id}>
        {appartment.images && <img src={appartment.images} alt="image d'appartment" />}
        <h2>{appartment.title}</h2>
        <p>{appartment.desc}</p>
        <span>{appartment.price}</span>
      </div>
    ))}
</div>
<button>
        <Link to="/add">Add new book</Link>
      </button>
  </> 
)}

export default Home;
