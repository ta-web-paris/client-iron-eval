import axios from "axios";

export const APIhandler = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/api",
});
