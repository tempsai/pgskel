/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const PG_API_URL = "https://api.pagerduty.com";
const AXIOS_SERVICE = axios.create({
  baseURL: PG_API_URL,
  timeout: 100000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// For Requests
AXIOS_SERVICE.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = "Token token=y_NbAkKc66ryYTWUXYEu";
    return config;
  },
  function (error) {
    return error;
  }
);

// For Responses 
AXIOS_SERVICE.interceptors.response.use(undefined, (error) => {
  //catch all for all API responses

  return Promise.reject(error);
});

class BaseService {
  axios: any;
  constructor() {
    this.axios = AXIOS_SERVICE;
  }
  get(endpoint: string, data: any) {
    return AXIOS_SERVICE.get(endpoint, data);
  }

  post(endpoint: string, data: any) {
    return AXIOS_SERVICE.post(endpoint, data);
  }

  put(endpoint: string, data: any) {
    return AXIOS_SERVICE.put(endpoint, data);
  }

  patch(endpoint: string, data: any) {
    return AXIOS_SERVICE.patch(endpoint, data);
  }

  delete(endpoint: string, data: any) {
    return AXIOS_SERVICE.delete(endpoint, data);
  }

  request(type: any, url: string, data?: any) {
    let promise = null;
    switch (type) {
      case "GET":
        promise = this.get(url, { params: data });
        break;
      case "POST":
        promise = this.post(url, data);
        break;
      case "PUT":
        promise = this.put(url, data);
        break;
      case "PATCH":
        promise = this.patch(url, data);
        break;
      case "DELETE":
        promise = this.delete(url, { params: data });
        break;
      default:
        promise = this.get(url, { params: data });
        break;
    }
    return promise;
  }
}

export default BaseService;
