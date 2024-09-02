import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { loginWithEmail } from 'src/apis/auth';
import localStorageKeys from 'src/configs/localStorage';

export const useLoginWithEmail = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (data) => {
      localStorage.setItem(localStorageKeys.ACCESS_TOKEN, data.data.token);
      localStorage.setItem(localStorageKeys.REFRESH_TOKEN, data.data.refreshToken);

      navigate('/');
    },
  });
};
