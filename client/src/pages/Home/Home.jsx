import React from 'react';
import styles from "./Home.module.css";
import Searchbar from '../../components/Searchbar/Searchbar';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
        <Searchbar />
    </div>
  )
}

export default Home