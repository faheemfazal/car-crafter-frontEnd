import { axiosuser } from "axiosLink/axios";

export const getOrderForlist = async (token) => {
  try {
    const response = await axiosuser.get(`/getOrderForUser`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch (e) {}
};

export const updateCancelOrder = async (
  token,
  startDate,
  orderId,
  amount,
  
) => {
  try {
    const response = await axiosuser({
      url: "/cancelOrder",
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        startDate,
        orderId,
        amount,
        
      },
    });

    return response;
  } catch {}
};
