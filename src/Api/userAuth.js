import { axiosuser } from "axiosLink/axios";

export const numberCheck = async (number)=>{
    try{
        console.log('llllllll');
        const res = await axiosuser({
              url : "/number",
              method:'post',
              data:{
                number
              }})
        console.log(res);
        return res

    }catch{

    }
}
export const googleAuthentication = async (data)=>{
  try{
      console.log('llllllll');
      const res = await axiosuser({
            url : "/googleAuthentication",
            method:'post',
            data:data
      })
      console.log(res,'llsdkl');
      

      return res

  }catch{

  }
}

