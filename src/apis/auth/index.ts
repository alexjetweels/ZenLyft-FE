import axiosPublic from 'src/utils/axiosPublic';
import axiosPrivate from 'src/utils/axiosPrivate';

import { Me } from 'src/types/me';

interface LoginResponse {
  refreshToken: string;
  token: string;
  tokenExpires: string;
}

export const loginWithEmail = (params: { email: string; password: string }) =>
  axiosPublic.post<LoginResponse>('/api/v1/auth/email/login', params);

export const getMe = async () => (await axiosPrivate.get<Me>('/api/v1/auth/me')).data;
