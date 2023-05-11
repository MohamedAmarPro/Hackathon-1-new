
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [input, setInput] = useState({
    title: "",
    desc: "",
    price: null,
    surfaces:null,
    chambers:null,
    dateEntree:"",
    dateSortie:"",
    city:"",
    images:"",
    dispo:null

  });
  console.log(input);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const inp = e.target;
    setInput({ ...input, [inp.name]: inp.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/myrentals", input);
      navigate("/myrentals");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="form">
        <form action="/userAppartment" >

        <h1>Add new Appartment</h1>
        <input
          type="text"
          placeholder="title"
          onChange={handleChange}
          name="title"
        />
        <input
          type="text"
          placeholder="desc"
          onChange={handleChange}
          name="desc"
        />
        <input
          type="number"
          placeholder="price"
          onChange={handleChange}
          name="price"
        />
        <input
          type="number"
          placeholder="surfaces"
          onChange={handleChange}
          name="surfaces"
        />
        <input
          type="number"
          placeholder="chambers"
          onChange={handleChange}
          name="chambers"
        />
        <input
          type="text"
          placeholder="dateEntree"
          onChange={handleChange}
          name="dateEntree"
        />
        <input
          type="text"
          placeholder="dateSortie"
          onChange={handleChange}
          name="dateSortie"
        />
        <input
          type="text"
          placeholder="city"
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
          placeholder="dispo"
          onChange={handleChange}
          name="dispo"
        />
        <button className="formButton" onClick={handleClick}>
          Add
        </button>
        </form>
      </div>
    </>
  );
};

export default Add;

  