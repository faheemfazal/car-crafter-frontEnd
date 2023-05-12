import { axiosuser } from "axiosLink/axios";

export const getSutableLocation = async (location) => {
  try {
    const response = await axiosuser.get(`/findlocation?location=${location}`);

    return response;
  } catch {}
};

export const getcar = async (date, location) => {
  try {
    const response = await axiosuser.get(
      `/findCar?date=${date}&location=${location}`
    );

    return response;
  } catch (e) {}
};

export const getDate = async () => {
  try {
    const response = await axiosuser.get("/getdate");

    return response;
  } catch (e) {}
};

export const carDetails = async (id, date, endDate, time) => {
  try {
    const response = await axiosuser.get(
      `/getcar?id=${id}&date=${date}&endDate=${endDate}&time=${time}`
    );

    return response.data;
  } catch (e) {}
};
