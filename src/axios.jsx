import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apis-dev.velodate.com/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.accessToken = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

export { AxiosError };
