import axios from "axios";

axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=UTF-8";

const axiosJarvis = axios.create();

axiosJarvis.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error);
  }
);
export { axiosJarvis };
