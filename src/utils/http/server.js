import axios from 'axios';
import { handleChangeRequestHeader, handleConfigureAuth, handleAuthError, handleGeneralError, handleNetworkError } from './tools';
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时
  timeout: 300000
});

service.interceptors.request.use((config) => {
  console.log(config);
  config = handleChangeRequestHeader(config);
  config = handleConfigureAuth(config);
  return config;
});

service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) return Promise.reject(response.data);
    handleAuthError(response.data.errno);
    handleGeneralError(response.data.errno, response.data.errmsg);
    return response;
  },
  (err) => {
    handleNetworkError(err.response.status);
    return Promise.reject(err.response);
  }
);

export const Get = (url, params = {}, clearFn) =>
  new Promise((resolve) => {
    service
      .get(url, { params })
      .then((result) => {
        let res;
        if (clearFn !== undefined) {
          res = clearFn(result.data);
        } else {
          res = result.data;
        }
        resolve([null, res]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });

export const Post = (url, data, params = {}) => {
  return new Promise((resolve) => {
    service
      .post(url, data, { params })
      .then((result) => {
        resolve([null, result.data]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
};
