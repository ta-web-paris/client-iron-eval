import axios from "axios";

const APIhandler = axios.create({
	baseURL: import.meta.env.VITE_APP_BACKEND_URL + "/api",
});

export default APIhandler;
