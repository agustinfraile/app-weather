import { useEffect } from "react";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/actions";


const Card = ({citySelectedWeather}) => {
  
  const dispatch = useDispatch();


    console.log(citySelectedWeather)


    return (
        <>
            {
                citySelectedWeather && Object.keys(citySelectedWeather).length > 0
                ? 
                (
                    <div className={styles.card_container}>
                        <div 
                            className={styles.card_container_name}
                        >
                            <h1>{citySelectedWeather.name}</h1>
                        </div>
                        <div 
                            className={styles.card_container_img}
                        >
                            <img src={citySelectedWeather.img} alt={citySelectedWeather.name} />
                        </div>
                        <div 
                            className={styles.card_container_weather}
                        >
                            <h4>{citySelectedWeather.weather}</h4>
                        </div>
                        <div 
                            className={styles.card_container_weatherMin}
                        >
                            <h4>
                                {Math.round(citySelectedWeather.weather_min)}
                            </h4>
                        </div>
                        <div 
                            className={styles.card_container_weatherMax}
                        >
                            <h4>
                                {Math.round(citySelectedWeather.weather_max)}
                            </h4>
                        </div>
                        <div 
                            className={styles.card_container_wind}
                        >
                            <h4>
                                {(citySelectedWeather.wind)}
                            </h4>
                        </div>
                        <div 
                            className={styles.card_container_clouds}
                        >
                            <h4>
                                {(citySelectedWeather.clouds)}
                            </h4>
                        </div>
                    </div>
                )
                :
                (
                    <h1>Busca un clima 👁️</h1>
                )
            }
        </>
  );
};

export default Card;
