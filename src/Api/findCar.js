import { axiosuser } from "axiosLink/axios";

export const getSutableLocation = async (location)=>{
    try{

        console.log(location,'.........');
        const response = await axiosuser.get(`/findlocation?location=${location}`)
        console.log(response);
        return response
    }catch{

    }

}

export const getcar=async (date,location)=>{
    try{
        const response = await axiosuser.get(`/findCar?date=${date}&location=${location}`)
        console.log(response);
        return response

    }catch(e){
   console.log(e);
    }
}

export const getDate = async ()=>{
    try{
        const response = await axiosuser.get('/getdate')
        console.log(response);
        return response
    }catch(e){
        console.log(e);
    }
}

export const carDetails = async (id,date,endDate,time)=>{
    try{
        console.log(id);
        const response = await axiosuser.get(`/getcar?id=${id}&date=${date}&endDate=${endDate}&time=${time}`)
        console.log(response);
        return response.data
    }catch(e){
        console.log(e);
    }
}