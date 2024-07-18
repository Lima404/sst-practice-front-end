import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { toast } from "react-toastify";

let cookies = parseCookies();

export const api = axios.create({
  // baseURL: "https://sst-practice.onrender.com",
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["sstAuth.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        destroyCookie(null, "sstAuth.token");
        toast.error("Você não está autenticado!");
        window.location.href = "/login";
        return;
      }
    }

    console.log(error);
    return Promise.reject(error);
  }
);
