import { axiosAdmin } from "axiosLink/axios"


export const getUser = async (token)=>{
    try{
        console.log('///');
        const response = await axiosAdmin({
            url:'/getUserDetails',
            method:'GET',
            headers:{'Authorization':`Bearer ${token}`},
        })
        console.log(response);
        return response

    }catch{

    }
}

export const blockUser = async (token,userId)=>{
    try{
        
        const response = await axiosAdmin({
            url:`/blockUser?userId=${userId}`,
            method:'post',
            headers:{'Authorization':`Bearer ${token}`},
        })
        console.log(response);
        return response

    }catch{

    }
}

export const UnblockUser = async (token,userId)=>{
    try{
        
        const response = await axiosAdmin({
            url:`/UnblockUser?userId=${userId}`,
            method:'post',
            headers:{'Authorization':`Bearer ${token}`},
        })
        console.log(response);
        return response

    }catch{

    }
}