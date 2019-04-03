//Modules
import React from "react";
import ReactSVG from "react-svg";
//Assets
import tomatoIcon from "../assets/tomato.svg";
//CSS
import styles from "./Header.module.css";

const Header = props => {
  const handleModal = () => {
    props.stop();
    props.closeModal();
  };

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Pomodoro</h1>
        <h1>Timer</h1>
        <ReactSVG src={tomatoIcon} />
        <img src={tomatoIcon} alt="Tomato Icon" style={{ height: "70px" }} />
      </div>

      <p className={styles.settings} onClick={handleModal}>
        Settings
      </p>
    </header>
  );
};

export default Header;
