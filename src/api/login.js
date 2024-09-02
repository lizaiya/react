import { Post } from '@/utils/http/server';
const prefix = import.meta.env.VITE_APP_BASE_PREFIX;
export const login = (data) => {
  return Post(prefix + '/auth/login', data);
};
