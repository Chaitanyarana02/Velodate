import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://apis-dev.intrsting.com/api/",
  // baseURL: "https://dev.intrsting.com/api/",
  baseURL: "https://apis.intrsting.com/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // console.log(token);
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
