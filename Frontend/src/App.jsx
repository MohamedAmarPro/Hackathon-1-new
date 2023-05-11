import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/navbar/Navbar";
import styles from "./App.module.css";
import Footer from "../src/components/footer/Footer";
import MyRentals from "./pages/MyRentals";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrentals" element={<MyRentals/>}/>
          <Route path="/add" />
          <Route path="/update" />
          <Route path="/delete" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
