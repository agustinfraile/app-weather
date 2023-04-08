import React, { useEffect } from 'react';
import styles from "./Home.module.css";
import Searchbar from '../../components/Searchbar/Searchbar';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getAllWeather, getWeather } from '../../redux/actions';

const Home = () => {

  const dispatch = useDispatch();
  const citySelectedWeather = useSelector(state => state.weather);




  return (
    <div className={styles.homeContainer}>
        <Searchbar />
        <Card 
          citySelectedWeather={citySelectedWeather}
        />
    </div>
  )
}

export default Home