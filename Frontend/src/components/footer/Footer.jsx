import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaJsSquare, FaReact, FaNodeJs } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <a
        className={styles.aContainer}
        href="https://github.com/Romain-Constant/Hackathon-1"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub className={styles.githubIcon} />
      </a>
      <div className={styles.projectName}>Hackathon#1 for Wild Code School</div>

      {/* <div className={styles.aboutUs}>About us</div> */}
      <FaJsSquare />
      <FaReact />
      <FaNodeJs />
    </div>
  );
};

export default Footer;
