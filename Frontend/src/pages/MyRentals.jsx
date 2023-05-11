import React from "react";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function MyRentals() {
  const [appartments, setAppartments] = useState([]);

  useEffect(() => {
    const fectchAllAppartment = async () => {
      try {
        const response = await axios.get("http://localhost:8800/myrentals");
        console.log(response);
        setAppartments(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fectchAllAppartment();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8800/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.home}>Apparts</div>

      <div className="appartments">
        {appartments &&
          appartments.map((appartment) => (
            <div className="appartment" key={appartment.id}>
              {appartment.images && (
                <img src={appartment.images} alt="image d'appartment" />
              )}
              <h2>{appartment.title}</h2>
              <p>{appartment.desc}</p>
              <span>{appartment.price}</span>
              <button className="update">
                <Link to={`/update/${appartment.id}`}>Update</Link>
              </button>
              <button
                className="delete"
                onClick={() => handleDelete(appartment.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default MyRentals;
