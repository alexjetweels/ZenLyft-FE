import { toast } from 'sonner';
import axios, { AxiosError } from 'axios';

import { CommonError } from 'src/types/common';

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 3 * 60 * 1000,
});

axiosPublic.interceptors.response.use(
  (res) => res,
  (error: AxiosError<CommonError>) => {
    toast.error(error.response?.data?.message || 'Something went wrong');
    return Promise.reject(error);
  }
);

export default axiosPublic;
