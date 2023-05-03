
import { axiosAdmin, axiosuser } from "axiosLink/axios";

export const getOrder = async(token)=>{
     try{
         const response = await axiosAdmin.get('/getorderData',{headers:{'Authorization':`Bearer ${token}`}})
         console.log(response);
         return response
     }catch(e){

     }
}
