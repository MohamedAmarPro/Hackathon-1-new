import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/navbar/Navbar";
import styles from "./App.module.css";
import Footer from "../src/components/footer/Footer";
import Add from "./pages/Add";
import MyRentals from "./pages/MyRentals";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrentals" element={<MyRentals/>}/>
          <Route path="/add"  element={<Add/>}/>
          <Route path="/update/:id"element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
