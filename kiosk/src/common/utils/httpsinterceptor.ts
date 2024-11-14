import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';

export const Api = (
  serviceURL: string = import.meta.env.VITE_ENV_SERVICE
): AxiosInstance => {
  const baseURL = `${serviceURL}/`;

  const axiosConfig: AxiosRequestConfig = {
    baseURL,
  };

  const httpInterceptor: AxiosInstance = axios.create(axiosConfig);

  httpInterceptor.interceptors.request.use(
    async (request) => {
      // Handle FormData differently from JSON
      if (request.data instanceof FormData) {
        // Remove 'Content-Type' to let Axios set it properly with boundaries for FormData
        delete request.headers['Content-Type'];
      } else {
        // Set headers for JSON requests
        request.headers['Accept'] = 'application/json';
        request.headers['Content-Type'] = 'application/json';
      }

      // Clean up any unnecessary headers (e.g., removing CORS-related headers)
      // It is unnecessary to remove 'Access-Control-Allow-Origin', as it's not expected in request headers

      return request;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  httpInterceptor.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  return httpInterceptor;
};