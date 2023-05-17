import { axiosuser } from "axiosLink/axios";

export const postCarBook = async (data, token) => {
  try {
    const response = await axiosuser.post("/createOrder", data);

    return response;
  } catch {}
};

// export const updateProfile = async (token, imageLc, imageIc) => {
//   try {
//     const response = await axiosuser({
//       url: "/updateprofile",
//       headers: { Authorization: `Bearer ${token}` },
//       method: "POST",
//       data: {
//         imageIc,
//         imageLc,
//       },
//     });
//   } catch (e) {}
// };

export const expandTime = async (data, token) => {
  try {
    const response = await axiosuser({
      url: "/updateExpandDate",
      headers: { Authorization: `Bearer ${token}` },
      method: "POST",
      data,
    });

    return response;
  } catch {}
};
