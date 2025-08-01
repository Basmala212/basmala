import axios from "axios";

const API_URL = "https://forkify-api.herokuapp.com/api";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/search?q=pizza`);
    return response.data.recipes;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/get?rId=${id}`);
    return response.data.recipe;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};
