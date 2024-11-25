import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://18.208.163.231:8000",
});

export default apiClient;
