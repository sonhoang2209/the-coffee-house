import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.thecoffeehouse.com/api/v5",
  timeout: 1000
});

export const getProduct = () => instance.post("/menu");