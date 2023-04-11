import styles from "./Card.module.css";

const Card = ({ citySelectedWeather }) => {
  console.log(citySelectedWeather);

  const climaIconos = [
    { description: "clear sky", icon: "fas fa-sun" },
    { description: "few clouds", icon: "fas fa-cloud-sun" },
    { description: "scattered clouds", icon: "fas fa-cloud" },
    { description: "broken clouds", icon: "fas fa-cloud-sun" },
    { description: "overcast clouds", icon: "fas fa-cloud" },
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

//   iconWeather(citySelectedWeather.img);

  return (
    <>
      {citySelectedWeather && Object.keys(citySelectedWeather).length > 0 ? (
        <div className={styles.card_container}>
          <div className={styles.card_container_name}>
            <h1>{citySelectedWeather.name}</h1>
          </div>
          <div className={styles.card_container_img}>
          <i className={iconWeather(citySelectedWeather.img)} /> {/* Reemplaza la imagen con el icono de FontAwesome */}
          </div>
          <div className={styles.card_container_weather}>
            <h4>{citySelectedWeather.weather}</h4>
          </div>
          <div className={styles.card_container_weatherMin}>
            <h4>{Math.round(citySelectedWeather.weather_min)}</h4>
          </div>
          <div className={styles.card_container_weatherMax}>
            <h4>{Math.round(citySelectedWeather.weather_max)}</h4>
          </div>
          <div className={styles.card_container_wind}>
            <h4>{citySelectedWeather.wind}</h4>
          </div>
          <div className={styles.card_container_clouds}>
            <h4>{citySelectedWeather.clouds}</h4>
          </div>
        </div>
      ) : (
        <h1>Busca un clima 👁️</h1>
      )}
    </>
  );
};

export default Card;
