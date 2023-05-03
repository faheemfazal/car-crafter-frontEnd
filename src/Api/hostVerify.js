import { axiosAdmin } from "axiosLink/axios"
import { axiosuser } from "axiosLink/axios"

export const postCar =async(year,fual,description,noOwner,transmission,brand,
    features,price,state,city,neighbourhood,sNumber,
    imageRC,imageIC,km,carNumber,imageCar,email,owner,token)=>{
        try{
            console.log(email,owner);
        const result = await axiosuser({
            url : '/hostdata',
            headers:{"Authorization":`Bearer ${token}`},
            method : 'POST',
            data :{
             year,fual,description,noOwner,transmission,brand,
             features,price,state,city,neighbourhood,sNumber,
             imageRC,imageIC,km,carNumber,imageCar,email,owner
            }
         })
         console.log(result);

         return result
     
        }catch{
    
        }
}


export const getHosttData = async (token)=>{
  try{
      console.log(token);
      const response = await axiosAdmin.get('/hostdata',{headers:{'Authorization':`Bearer ${token}`}}).catch((e)=>console.log(e))
      console.log('fdgsdf');
      console.log(response)
      return response.data.car

  }catch{ 

  }
}

export const hostApprove = async(id,token)=>{

    try{
        console.log("dfgsdgsdwwww");
      const response = await axiosAdmin.get(`/approve?id=${id}`,{headers:{"Authorization":`Bearer ${token}`}})
      console.log(response);
      return(response)
    }catch(e){
      console.log(e);
    }
}

export const hostDenied = async(id,token)=>{
    try{
      const response = await axiosAdmin.get(`/denied`,{headers:{"Authorization":`Bearer ${token}`}})
      console.log(response);
      
    }catch(e){
      console.log(e);
    }
}

export const getapproveAndDenile = async(token,data)=>{
    try{
      const response = await axiosAdmin.get(`/getStatusData?status=${data}`,{headers:{"Authorization":`Bearer ${token}`}})
      console.log(response.data.car);
      return response.data.car
      
    }catch(e){
    
    }
}

export const getuserCar = async (id,token)=>{
  try{
    const response = await axiosuser.get(`/gethostList?id=${id}`,{headers:{"Authorization":`Bearer ${token}`}})
    console.log(response);
    return response
  }catch{

  }
}

export const postAccountDetails = async (accountNumber,branch,ifscCode,accoundHolder,token,id)=>{
  try{
    console.log(token,'llll');
    const response = await axiosuser({
      url:'/postAccounntDetails',
      method:"POST",
      headers:{"Authorization":`Bearer ${token}`},
      data:{
        accountNumber,branch,ifscCode,accoundHolder,id
      }
    })
    console.log(response);
    return response
  }catch(e){

  }
}

export const findAccount = async (token,id)=>{
  try{
    const response = await axiosuser.get(`/getAccount?id=${id}`,{headers:{"Authorization":`Bearer ${token}`}})
    console.log(response);
    return response

  }catch(e){

  }
}