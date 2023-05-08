
import axios from "axios";

export const axiosuser = axios.create({
  // baseURL: "http://localhost:4000/",
  baseURL: "https://carcrafter.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});


export const axiosAdmin = axios.create({
  // baseURL: "http://localhost:4000/admin/",
  baseURL: "https://carcrafter.onrender.com/admin",
  headers: {
    "Content-Type": "application/json",
  },
});

// export default {axiosuser, axiosAdmin};