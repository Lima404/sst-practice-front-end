import axios from "axios";
import { parseCookies, destroyCookie } from "nookies";
import { toast } from "react-toastify";

let cookies = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333",

  headers: {
    Authorization: `Bearer ${cookies["sstAuth.token"]}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response !== null) {
      if (error.response.status === 401) {
        destroyCookie(null, "sstAuth.token");
        toast.error("Você não está autenticado!");
        window.location.href = "/";
        return;
      }
    }

    console.log(error);
    return Promise.reject(error);
  }
);
