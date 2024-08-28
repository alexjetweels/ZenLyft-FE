import axiosPublic from 'src/utils/axiosPublic';
import axiosPrivate from 'src/utils/axiosPrivate';

interface LoginResponse {
  refreshToken: string;
  token: string;
  tokenExpires: string;
}

export const loginWithEmail = (params: { email: string; password: string }) =>
  axiosPublic.post<LoginResponse>('/api/v1/auth/email/login', params);

export const getMe = () => axiosPrivate.get('/api/v1/auth/me');
