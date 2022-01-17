const ADD_FLOWERS_TO_CART = "shoppingCart/ADD-FLOWERS-TO-CART";
const DELETE_FLOWERS_FROM_CART = "shoppingCart/DELETE_FLOWERS_FROM_CART";
const INCREASE_FLOWERS_COUNT = "shoppingCart/INCREASE-FLOWERS-COUNT";
const DECREASE_FLOWERS_COUNT = "shoppingCart/DECREASE-FLOWERS-COUNT";
const DELETE_ALL_FLOWERS = "shoppingCart/DELETE-ALL-LOWERS";

const newState = (state, obj) => {
  return {
    ...state,
    cart: obj,
    totalFlowersCount: obj.reduce((a, b) => a + b.totalCount, 0),
    totalFlowersPrice: obj.reduce((a, b) => a + b.totalPrice, 0),
  };
};

const initialState = {
  cart: [],
  totalFlowersCount: 0,
  totalFlowersPrice: 0,
};

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FLOWERS_TO_CART: {
      const existingCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingCart) return state;

      const newCart = state.cart.concat({
        ...action.payload,
        totalPrice: action.payload.price,
        totalCount: 1,
      });
      return newState(state, newCart);
    }
    case DELETE_FLOWERS_FROM_CART: {
      const newCart = state.cart.filter((item) => item.id !== action.payload);
      return newState(state, newCart);
    }
    case INCREASE_FLOWERS_COUNT: {
      const newCart = state.cart.map((item) => {
        return item.id === action.payload
          ? {
              ...item,
              totalPrice: item.totalPrice + item.price,
              totalCount: item.totalCount + 1,
            }
          : item;
      });
      return newState(state, newCart);
    }
    case DECREASE_FLOWERS_COUNT: {
      const newCart = state.cart.map((item) => {
        return item.id === action.payload
          ? {
              ...item,
              totalPrice: item.totalPrice - item.price,
              totalCount: item.totalCount - 1,
            }
          : item;
      });
      return newState(state, newCart);
    }
    case DELETE_ALL_FLOWERS:
      return {
        ...state,
        cart: [],
        totalFlowersCount: 0,
        totalFlowersPrice: 0,
      };
    default:
      return state;
  }
};

export const addFlowersToCart = (payload) => ({
  type: ADD_FLOWERS_TO_CART,
  payload,
});
export const deleteFlowersFromCart = (id) => ({
  type: DELETE_FLOWERS_FROM_CART,
  payload: id,
});
export const increaseFlowersToCart = (id) => ({
  type: INCREASE_FLOWERS_COUNT,
  payload: id,
});
export const decreaseFlowersToCart = (id) => ({
  type: DECREASE_FLOWERS_COUNT,
  payload: id,
});
export const deleteAllFlowers = () => ({ type: DELETE_ALL_FLOWERS });
