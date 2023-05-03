import { axiosuser } from "axiosLink/axios"


export const UpdateCompleteOrder = async (orderId ,token)=>{
    try{
    console.log('llllllllll');
        const response = await axiosuser({
            url:'/setCompleteOrder',
            method:'POST',
            headers:{'Authorization':`Bearer ${token}`},
            data:{orderId},
        })
        console.log(response,'complete Order');
        return response;

    }catch(e){

    }
}


