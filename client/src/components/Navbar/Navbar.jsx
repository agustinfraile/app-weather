import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import styles from "./Navbar.module.css";
// import {faBolt} from 
const Navbar = () => {
  return (
    <div className={styles.menuCnt}>
        <div className={styles.menuCnt_Logo}>
          <i className={`fa-solid fa-bolt ${styles.logo}`}>LOGO</i>
        </div>

        <div className={styles.menuCnt_Search }>
            <Searchbar />
        </div>
        
    </div>
  );
};

export default Navbar;


