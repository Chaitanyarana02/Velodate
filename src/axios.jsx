import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://apis-dev.velodate.com/api/",
  // baseURL: "https://dev.velodate.com/api/",
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
