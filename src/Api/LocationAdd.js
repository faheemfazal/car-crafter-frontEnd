import { axiosAdmin, axiosuser } from "axiosLink/axios";

export const getLocations = async (token) => {
  try {
    const response = await axiosAdmin.get("/findLocation", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch {}
};

export const createLocation = async (token, state, city) => {
  try {
    const response = await axiosAdmin({
      url: "/postlocation",
      method: "POST",
      data: {
        state: state,
        city: city,
      },
      headers: { Authorization: `Bearer ${token}` },
    });

    return response;
  } catch {}
};

export const deleteLocation = async (token, deleteId) => {
  const response = await axiosAdmin({
    url: `/locationDelete?id=${deleteId}`,
    headers: { Authorization: `Bearer ${token}` },
    method: "POST",
  });

  return response;
};

export const getLandingLocations = async () => {
  try {
    const response = await axiosuser.get("/landinglocation");

    return response.data.city;
  } catch (e) {}
};
