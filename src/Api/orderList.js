import { axiosuser } from "axiosLink/axios"

export const getOrderForlist =async(token,id)=>{
    try{
        const response = await axiosuser.get(`/getOrderForUser?id=${id}`,{headers:{'Authorization':`Bearer ${token}`}})
        console.log(response);
        return response
    }catch(e){
        
    }
}

export const updateCancelOrder = async(token,startDate,orderId,amount,userId)=>{
    try{
      const response = await axiosuser({
        url:'/cancelOrder',
        method : 'POST',
        headers:{'Authorization':`Bearer ${token}`},
        data:{
            startDate,orderId,amount,userId 
        }
      })
      console.log(response);
      return response
    }catch{

    }
}
