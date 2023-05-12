import { axiosuser } from "axiosLink/axios"


export const sendMessage = async (from, to, message, token) => {
  try {
    const response = await axiosuser({
      url: '/sendMessage',
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      data: {
        from, to, message
      }
    })
    console.log(response);



  } catch (e) {

  }
}

export const createChat = async (id, userId, token) => {
  try {

    const response = await axiosuser({
      url: '/createChat',
      method: 'POST',
      headers: { 'Authorization': `Bearer ${token}` },
      data: {
        senderUserId: id,
        reciverId: userId
      }
    })

    return response

  } catch (e) {

  }
}

export const getChatList = async (userId, token) => {
  try {

    const response = await axiosuser({
      url: `/getChatList?userId=${userId}`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })

    return response

  } catch (e) {

  }
}

export const createMessage = async (conversationId, senderId, msg, token) => {
  try {

    const response = await axiosuser({
      url: '/sentMessage',
      headers: { 'Authorization': `Bearer ${token}` },
      method: 'POST',
      data: {
        conversationId,
        sender: senderId,
        text: msg
      }
    })

    return response

  } catch (e) {

  }
}

export const getOldMessages = async (converSation, token) => {
  try {
    const response = await axiosuser({
      url: `/getOldMessage?converSation=${converSation}`,
      headers: { 'Authorization': `Bearer ${token}` },
      method: 'GET',


    })

    return response

  } catch (e) {

  }
}