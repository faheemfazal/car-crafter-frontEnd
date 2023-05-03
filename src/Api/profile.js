import { axiosuser  } from "axiosLink/axios"


export const uploadprofile = async (token,userId,drivingLicense,identitycard)=>{
    try{
        console.log('/gf.gf');
        const response = await axiosuser({
            url:'/postProfile',
            method:'POSt',
            headers:{'Authorization':`Bearer ${token}`},
            data:{
                userId,drivingLicense,identitycard
            }
        }) 
        console.log(response);
        return response

    }catch{

    }
}

export const checkprofile = async (token,userid)=>{
    try{
        const response = await axiosuser({
            url:`/checkprofile?userId=${userid}`,
            method:'GET',
            headers:{'Authorization':`Bearer ${token}`},
            
        })
        console.log(response);
        return response

    }catch{

    }
}