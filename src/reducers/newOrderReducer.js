import { ADD_ORDER_ITEM } from "../actions/action_types";

// eslint-disable-next-line no-undef
export default (state = { restaurant: null, order: null }, action) => {
  switch (action.type) {
    case ADD_ORDER_ITEM:
      let order = []
      if(state.restaurant && state.restaurant.id === action.restaurant.id) {
        order = state.order;
      }

      order.push({
        product: action.product,
        quantity: action.quantity,
        comment: action.comment
      })

      return {
        ...state,
        restaurant: action.restaurant,
        order: order
    }
        
    default:
      return state
  }
}