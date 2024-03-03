import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-explore-food.onrender.com",
});
