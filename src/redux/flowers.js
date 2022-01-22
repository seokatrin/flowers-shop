import { flowersApi } from "../api";

const SET_FLOWERS = "flowers/SET-FLOWERS";
const SET_FLOWERS_DETAIS = "flowers/SET-FLOWERS-DETAIS";
const SET_CATEGORY = "flowers/SET-CATEGORY";
const SET_SORT_BY = "flowers/SET-SORT_BY";
const SET_ACTIVE_PAGE = 'flowers/SET-ACTIVE-PAGE'

const initialState = {
  flowers: [],
  flowersDetails: [],
  activeCategory: 0,
  activeSortBy: { type: "rating", order: "desc" },
  flowersForResearch: [],
  activePage: 0
};

export const flowers = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLOWERS:
      return {
        ...state,
        flowers: action.payload,
        flowersForResearch:
          state.flowersForResearch.length === 0
            ? action.payload.map((item) => ({ id: item.id, name: item.name }))
            : state.flowersForResearch,
      };
    case SET_FLOWERS_DETAIS:
      return {
        ...state,
        flowersDetails: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    case SET_SORT_BY:
      return {
        ...state,
        activeSortBy: action.payload,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.payload
      }
    default:
      return state;
  }
};

const setFlowers = (payload) => ({type: SET_FLOWERS, payload});
const setFlowersDetails = (payload) => ({ type: SET_FLOWERS_DETAIS, payload });
export const setCategory = (payload) => ({ type: SET_CATEGORY, payload });
export const setSortBy = (payload) => ({ type: SET_SORT_BY, payload });
export const setActivePage = (payload) => ({type: SET_ACTIVE_PAGE, payload})

export const getFlowers =
  (category = 0, sortBy = { type: "rating", order: "asc" }) =>
  async (dispatch) => {
    const response = await flowersApi.getFlowers(category, sortBy);
    dispatch(setFlowers(response.data));
    category > 0 && dispatch(setActivePage(0));
  };

export const getFlowersDetails = (id) => async (dispatch) => {
  const response = await flowersApi.getOneFlower(id);
  dispatch(setFlowersDetails(response.data[0]));
};
