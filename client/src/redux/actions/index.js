import axios from "axios";

export const GET_WEATHER = "GET_WEATHER";
export const GET_ALL_WEATHER = "GET_ALL_WEATHER";

export const getWeather = (city) => {
  return async function (dispatch) {
    try {
      const weathers = await axios.get(`/weather?city=${city}`);

      return dispatch({
        type: GET_WEATHER,
        payload: weathers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllWeather = () => {
  return async function (dispatch) {
    try {
      const allWeather = await axios.get('/weather');

      return dispatch({
        type: GET_ALL_WEATHER,
        payload: allWeather.data
      })
    } catch (error) {
      console.log(error);
    }
  }
}
