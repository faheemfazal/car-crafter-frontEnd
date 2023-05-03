import { axiosuser } from "axiosLink/axios"


export const postCarBook = async(data,token)=>{
    try{
        console.log(data,token);
        const response = await axiosuser.post('/createOrder',data)
        console.log(response,'..........x');
        return response

    }catch{

    }
}

export const updateProfile = async (token,imageLc,imageIc)=>{
    try{ 
       const response = await axiosuser({
        url:'/updateprofile',
        headers:{'Authorization':`Bearer ${token}`},
        method:'POST',
        data:{
            imageIc,imageLc
        }
       })
       console.log(response);

    }catch(e){

    }
}

export const expandTime = async(data,token)=>{
    try{
      const response = await axiosuser({
        url:'/updateExpandDate',
        headers:{'Authorization':`Bearer ${token}`},
        method:'POST',
        data
      })
      console.log(response);
      return response
    }catch{

    }
}

