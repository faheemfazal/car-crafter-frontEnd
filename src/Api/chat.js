import { axiosuser } from "axiosLink/axios"


export const sendMessage = async (from,to,message ,token)=>{
      try{
        const response = await axiosuser({
            url:'/sendMessage',
            method:'POST',
            headers:{'Authorization':`Bearer ${token}`},
            data:{
                from,to,message
            }
        })
        console.log(response );

        

      }catch(e){

      }
}

export const createChat = async (id,userId,token)=>{
  try{
    console.log(userId);
       const response = await axiosuser({
        url:'/createChat',
        method :'POST',
        headers:{'Authorization':`Bearer ${token}`},
        data:{
         senderUserId: id,
         reciverId:userId
      }
       })
       console.log(response);
       return response

  }catch(e){

  }
}

export const getChatList =async (userId,token)=>{
  try{

    const response  = await axiosuser({
      url:`/getChatList?userId=${userId}`,
      method:'GET',
      headers:{'Authorization':`Bearer ${token}`}, 
    })
    console.log(response);
    return response

  }catch(e){
    console.log(e);
  }
}

export const createMessage = async (conversationId,senderId,msg,token)=>{
  try{
    console.log('erwngbfg');
      const response = await axiosuser({
          url:'/sentMessage',
          headers:{'Authorization':`Bearer ${token}`},
          method:'POST',
          data:{
              conversationId,
              sender: senderId,
              text:msg 
          }
      })
      console.log(response);
      return response

  }catch(e){

  }
}

export const getOldMessages = async (converSation,token)=>{
  try{
    const response = await axiosuser({
      url:`/getOldMessage?converSation=${converSation}`,
      headers:{'Authorization':`Bearer ${token}`},
      method:'GET',


    })
    console.log(response);
    return response

  }catch(e){

  }
}