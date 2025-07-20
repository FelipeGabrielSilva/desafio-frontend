import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:2753",
  timeout: 5000,
});
