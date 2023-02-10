import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.VUE_APP_CAT_API}`,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = process.env.VUE_APP_API_KEY;
    }
    return config;
  },
  (error) => {
    return Promise.reject(new Error(error));
  }
);

export { api };
