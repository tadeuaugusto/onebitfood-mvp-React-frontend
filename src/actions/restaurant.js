import { LOAD_RESTAURANTS } from "./action_types";
import api from "../services/api";

export const loadRestaurants = (catetory = null) => async (dispatch) => {
  let response = await api.loadRestaurants(catetory);
  dispatch({
    type: LOAD_RESTAURANTS,
    restaurants: response.data.restaurants
  });
}