import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Home.module.css";
import InformationWeather from '../../components/InformationWeather/InformationWeather';
import Searchbar from '../../components/Searchbar/Searchbar';

const Home = () => {

  const dispatch = useDispatch();
  const citySelectedWeather = useSelector(state => state.weather);




  return (
    <div className={styles.home__container}>
      <div className={styles.home__container_searchCity}>
        <Searchbar />
      </div>

        <InformationWeather
          citySelectedWeather={citySelectedWeather}
        />
    </div>
  )
}

export default Home