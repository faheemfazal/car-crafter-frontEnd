import { axiosuser } from "axiosLink/axios";

export const UpdateCompleteOrder = async (orderId, token) => {
  try {
    const response = await axiosuser({
      url: "/setCompleteOrder",
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: { orderId },
    });

    return response;
  } catch (e) {
    
  }
};
