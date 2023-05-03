

import { axiosuser } from "axiosLink/axios"
import { axiosAdmin } from "axiosLink/axios";

export const compliteOrderForPayment = async(token)=>{
    try{

        const response = await axiosAdmin({
             url:'/getCompliteOrder',
             method:'GET',
             headers:{'Authorization':`Bearer ${token}`},

        })

        console.log(response);
        return response

    }catch(e){

    }
}

export const getAccountdetails = async(userId,token)=>{
    try{

        const response = await axiosAdmin({
             url:`/getAccountdetails?userId=${userId}`,
             method:'GET',
             headers:{'Authorization':`Bearer ${token}`},

        })

        console.log(response,'lllllllllllllll');
        return response

    }catch(e){

    }
}

export const paymentComplete = async (orderId,token)=>{
    try{
        const response = await axiosAdmin({
            url:'/updatePaymentStatus',
            method:'POST',
            headers:{'Authorization':`Bearer ${token}`},
            data:{orderId}


        })
        console.log(response);
        return response

    }catch{

    }
    
}


export const checkAcc = async (token,userId)=>{
    try{
        console.log(';');
        const response = await axiosuser({
            url:`/checkAcc?userId=${userId}`,
            method:'get',
            headers:{'Authorization':`Bearer ${token}`},
            data:{userId}


        })
        console.log(response);
        return response

    }catch{

    }
}

