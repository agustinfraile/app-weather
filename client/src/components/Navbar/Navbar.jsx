import React from "react";
import Searchbar from "../Searchbar/Searchbar";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.menuCnt}>
        <div className={styles.menuCnt_Logo}>
            LOGO
        </div>

        <div className={styles.menuCnt_Search }>
            <Searchbar />
        </div>
    </div>
  );
};

export default Navbar;


