import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3 * 60 * 1000,
});

export default axiosPublic;
