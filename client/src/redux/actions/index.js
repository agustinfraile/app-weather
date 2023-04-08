import axios from "axios";

export const GET_WEATHER = "GET_WEATHER";

export const getWeather = (city) => {
  return async function (dispatch) {
    try {
      const weather = await axios.get(`/weather?city=${city}`);

      return dispatch({
        type: GET_WEATHER,
        payload: weather.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
