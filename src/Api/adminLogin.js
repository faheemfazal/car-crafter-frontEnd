import { axiosAdmin } from "axiosLink/axios";

export const loginAdmin = async (data) => {
  try {
    const res = await axiosAdmin.post("/login", data);

    const token = res.data.token;
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
      return res;
    } else {
      return false;
    }
  } catch {}
};
