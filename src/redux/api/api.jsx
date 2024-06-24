import axios from "axios";
import { CfgIdx, Configs } from "../../../public/config";

// if there's no found same subdomain in config.js, the logic is to get the first item in array.
export const API_domain = Configs
  ? Configs.tenant[CfgIdx === -1 ? 0 : CfgIdx].api_url
  : "";

export const API = axios.create();

// Request interceptor for API calls
API.interceptors.request.use(
  async (config) => {
    config.headers = {
      Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token"))}`,
      Accept: "application/json",
    };

    config.baseURL = `${API_domain}/api/`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// const accesToken = JSON.parse(sessionStorage.getItem("token"));

// const baseurl = "http://192.168.1.200:5001/api";

// const authAxios = axios.create({
//   baseURL: baseurl,
//   headers: { Authorization: `Bearer ${accesToken}` },
// });

export const tokenAPI = (url = `/Token/`) => {
  return {
    getToken: () =>
      API.post(url + "gentoken", {
        TokenAuthUser: "dev",
        TokenAuthPass: "p@$$w0rd",
      }),
  };
};

export const userAccAPI = (url = `/UserAccount/`) => {
  return {
    login: (username, password) =>
      API.post(url + `useraccountvalidationweb`, {
        username: username,
        password: password,
      }),
  };
};
