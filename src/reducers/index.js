import { combineReducers } from "redux";
import RestaurantsReducer from "./restaurantsReducer";
import modalReducer from "./modalReducer";
import addressReducer from "./addressReducer";
import newOrderReducer from "./newOrderReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  restaurantsState: RestaurantsReducer,
  modalState: modalReducer,
  addressState: addressReducer,
  newOrderState: newOrderReducer,
  orderState: orderReducer
})