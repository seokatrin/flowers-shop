import axios from "axios";

export const flowersApi = {
  getFlowers(categoryType, sortBy) {
    try {
      return axios.get(
        `https://61e10d1363f8fc0017618992.mockapi.io/flowers/items?sortBy=${
          sortBy.type
        }&order=${sortBy.order}${
          categoryType ? `&category=${categoryType}` : ""
        }`
      );
    } catch (error) {
      console.error(error);
    }
  },

  getOneFlower (id) {
    try {
        return axios.get(
          `https://61e10d1363f8fc0017618992.mockapi.io/flowers/items?id=${id}`
        );
      } catch (error) {
        console.error(error);
      }
  }
};
