import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export default {
  service,

  getAll(endPoint) {
    return service.get(endPoint);
  },

  create(endPoint, data) {
    return service.post(endPoint, data);
  },
};
