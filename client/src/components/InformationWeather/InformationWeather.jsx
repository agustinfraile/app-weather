import brokenClouds from '../../images/icons/broken-clouds.png';
import fewClouds from '../../images/icons/few-clouds.png';
import clearSky from '../../images/icons/clear-sky.png';
import clouds from '../../images/icons/clouds.png';

import styles from './InformationWeather.module.css';

const InformationWeather = ({ citySelectedWeather }) => {

    const climaIconos = [
        { description: "clear sky", icon: clearSky },
        { description: "few clouds", icon: fewClouds },
        { description: "scattered clouds", icon: clouds },
        { description: "broken clouds", icon: brokenClouds },
        { description: "overcast clouds", icon: clouds },
        { description: "rain", icon: "fas fa-cloud-rain" },
        { description: "snow", icon: "fas fa-snowflake" },
        { description: "thunderstorm", icon: "fas fa-bolt" },
        { description: "mist", icon: "fas fa-smog" },
        { description: "fog", icon: "fas fa-smog" },
      ];
    
      const iconWeather = (description) => {
        // Buscar el objeto que coincide con la descripción del clima en la lista de climaIconos
        const iconoClima = climaIconos.find(
          (clima) => clima.description.toLowerCase() === description.toLowerCase()
        );
    
        // Si se encuentra el icono correspondiente, devolver su nombre, de lo contrario devolver un nombre de icono predeterminado o null
        return iconoClima ? iconoClima.icon : "fas fa-question"; 
      };


  return (
    <>
      {citySelectedWeather && Object.keys(citySelectedWeather).length > 0 ? (
        <div className={styles.card_container}>
          
          <div className={styles.card_container_name}>
            <h1>{citySelectedWeather.name}</h1>
          </div>

          <div className={styles.card_container_info}>

            <div className={styles.card_container_img}>
              {/* Reemplaza imagen con el icono de FontAwesome */}
              <img src={iconWeather(citySelectedWeather.img)} alt="" />
            </div>

            {/* <div className={styles.card_container_weather}>
              <h4>{citySelectedWeather.weather}</h4>
            </div> */}

          </div>

          <div className={styles.card_container_weatherFull}>

            <div className={styles.card_container_weatherMin}>
              <h4>
                  Temperatura minima: {Math.round(citySelectedWeather.weather_min)}°C
              </h4>
            </div>
            <div className={styles.card_container_weatherMax}>
              <h4>
                  Temperatura maxima: {Math.round(citySelectedWeather.weather_max)}°C
              </h4>
            </div>

          </div>

          <div className={styles.card_container_wind}>
            <h4>Viento: {citySelectedWeather.wind} km/h</h4>
          </div>
          <div className={styles.card_container_clouds}>
            <h4>Nubes: {citySelectedWeather.clouds}%</h4>
          </div>
        </div>
      ) : (
        <h1>Busca un clima 🌡️</h1>
      )}
    </>
  )
}

export default InformationWeather