import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "../src/components/navbar/Navbar";
import styles from "./App.module.css";
import Footer from "../src/components/footer/Footer";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Rentals from "./pages/Rentals";

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myrentals" element={<Rentals/>}/>
          <Route path="/add"  element={<Add/>}/>
          <Route path="/update/:id"element={<Update/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
