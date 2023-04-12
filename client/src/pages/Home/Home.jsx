import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import styles from "./Home.module.css";

const Home = () => {

  const dispatch = useDispatch();
  const citySelectedWeather = useSelector(state => state.weather);




  return (
    <div className={styles.homeContainer}>
        <Navbar />
        <Card 
          citySelectedWeather={citySelectedWeather}
        />
    </div>
  )
}

export default Home