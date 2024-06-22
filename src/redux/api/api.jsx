import axios from "axios";

// if there's no found same subdomain in config.js, the logic is to get the first item in array.
export const API_domain = window.Configs
  ? window.Configs.tenant[window.CfgIdx === -1 ? 0 : window.CfgIdx].api_url
  : "";

export const API = axios.create();

// Request interceptor for API calls
API.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      Accept: "application/json",
    };

    config.baseURL = `${API_domain}/`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
