import { Post, Get } from '@/utils/http/server';
const prefix = import.meta.env.VITE_APP_BASE_PREFIX;
export const login = (data) => {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return Post(prefix + '/auth/login', formData);
};
export const getCode = (data) => {
  return Get(prefix + '/auth/code', data);
};
