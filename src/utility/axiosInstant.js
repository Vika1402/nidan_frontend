import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://nidan-backend.onrender.com",
});

export default axiosInstance;
