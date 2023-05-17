import { axiosAdmin } from "axiosLink/axios";
import { axiosuser } from "axiosLink/axios";



export const getHosttData = async (token) => {
  try {
    const response = await axiosAdmin
      .get("/hostdata", { headers: { Authorization: `Bearer ${token}` } })
      .catch((e) => console.log(e));

    return response.data.car;
  } catch {}
};

export const hostApprove = async (id, token) => {
  try {
    const response = await axiosAdmin.get(`/approve?id=${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (e) {}
};

export const hostDenied = async (id, token) => {
  try {
    const response = await axiosAdmin.get(`/denied`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {}
};

export const getapproveAndDenile = async (token, data) => {
  try {
    const response = await axiosAdmin.get(`/getStatusData?status=${data}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data.car;
  } catch (e) {}
};

export const getuserCar = async ( token) => {
  try {
    const response = await axiosuser.get(`/gethostList`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch {}
};

export const postCar = async (data,token
) => {
  try {
    const result = await axiosuser({
      url: "/hostdata",
      headers: { Authorization: `Bearer ${token}` },
      method: "POST",
      data: data
    });

    return result;
  } catch {}
};

export const postAccountDetails = async (
  accountNumber,
  branch,
  ifscCode,
  accoundHolder,
  token,
  
) => {
  try {
    const response = await axiosuser({
      url: "/postAccounntDetails",
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        accountNumber,
        branch,
        ifscCode,
        accoundHolder,
        
      },
    });
    return response;
  } catch (e) {}
};

export const findAccount = async (token) => {
  try {
    const response = await axiosuser.get(`/getAccount`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  } catch (e) {}
};
