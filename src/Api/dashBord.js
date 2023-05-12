import { axiosAdmin } from "axiosLink/axios";

export const getdashBord = async () => {
  try {
    const response = await axiosAdmin.get("/getDashBord");

    return response;
  } catch {}
};
