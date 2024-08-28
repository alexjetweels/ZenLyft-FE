import axios, { AxiosError } from 'axios';

import routePath from 'src/configs/routePath';
import { queryClient } from 'src/configs/queryClient';
import localStorageKeys from 'src/configs/localStorage';

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3 * 60 * 1000,
});

axiosPrivate.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(localStorageKeys.ACCESS_TOKEN)}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (res) => res,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      queryClient.clear();
      localStorage.clear();

      return window.location.replace(routePath.LOGIN);
    }

    return Promise.reject(error);
  }
);

export default axiosPrivate;
