import { GET_ALL_WEATHER, GET_WEATHER } from "../actions";

const initialState = {
  weather: [],
  allWeather: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    case GET_ALL_WEATHER:
      return {
        ...state,
        allWeather: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
