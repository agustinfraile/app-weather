const axios  = require("axios");
const {API_KEY} = process.env;
const {URL} = process.env;

// funcion para traer el clima de una ciudad
const getWeather = async (city) => {
    const url = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const resp = await axios.get(url);

        const cityWeather = {
            coord: resp.data.coord,
            weather: resp.data.weather[0].main,
            weather_min: resp.data.main.temp_min,
            weather_max: resp.data.main.temp_max,
            wind: resp.data.wind.speed,
            clouds: resp.data.clouds.all,
            lon: resp.data.coord.lon,
            lat: resp.data.coord.lat,
            img: resp.data.weather[0].icon,
            id: resp.data.id
        }

        return cityWeather;
    } catch (error) {
        console.log(error);
        throw new Error("No se pudo obtener el clima");
    }
}

module.exports = {
    getWeather
}