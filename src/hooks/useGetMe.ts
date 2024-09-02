import { useQuery } from '@tanstack/react-query';

import { getMe } from 'src/apis/auth';
import QUERY_KEY from 'src/configs/queryKey';

export const useGetMe = () =>
  useQuery({
    queryKey: [QUERY_KEY.ME],
    queryFn: getMe,
    staleTime: Infinity,
  });
