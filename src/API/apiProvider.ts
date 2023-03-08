import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export const API = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});
