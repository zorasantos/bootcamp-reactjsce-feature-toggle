import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_API_BASE_URL,
});
