import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Update.module.css";

const Update = () => {
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    surfaces: null,
    chambers: null,
    dateEntree: "",
    dateSortie: "",
    city: "",
    images: "",
    dispo: null,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const appartmentId = location.pathname.split("/")[2];

  const handleChange = (e) => {
    const inp = e.target;
    setInput({ ...input, [inp.name]: inp.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/myrentals/" + appartmentId, input);
      navigate("/myrentals");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.formContainer}>
        <form className={styles.form} action="/userAppartment">
          <h1 className={styles.addTitle}>Update rental</h1>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Title"
              onChange={handleChange}
              name="title"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={handleChange}
              name="desc"
            />
            <input
              type="number"
              placeholder="Price"
              onChange={handleChange}
              name="price"
            />
            <input
              type="number"
              placeholder="Surface"
              onChange={handleChange}
              name="surfaces"
            />
            <input
              type="number"
              placeholder="Chambers"
              onChange={handleChange}
              name="chambers"
            />
            <input
              type="text"
              placeholder="Entry date (YYYY-MM-DD)"
              onChange={handleChange}
              name="dateEntree"
            />
            <input
              type="text"
              placeholder="Out date (YYYY-MM-DD)"
              onChange={handleChange}
              name="dateSortie"
            />
            <input
              type="text"
              placeholder="City"
              onChange={handleChange}
              name="city"
            />
            <input
              type="file"
              placeholder="images"
              onChange={handleChange}
              name="images"
            />
            <input
              type="number"
              placeholder="Available"
              onChange={handleChange}
              name="dispo"
            />
            <button className={styles.formButton} onClick={handleClick}>
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Update;
