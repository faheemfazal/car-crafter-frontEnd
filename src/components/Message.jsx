import React, { useEffect, useState } from 'react'
import moment from 'moment'
import {AiOutlineSend,AiOutlineUser} from 'react-icons/ai'
import { createMessage } from 'Api/chat'
import { getOldMessages } from 'Api/chat'
import  io from "socket.io-client";
import { message } from 'antd'


let socket = io.connect("https://carcrafter.onrender.com");
// let socket = io.connect("http://localhost:4000");

function Message({date,name,chatdata,senderId,token,setChatData}) {
    const [msg,setMsg]= useState('')
    const [messagedata,setMessagedata]=useState([])
    const [loadMessage,setloadMessage]=useState(false)
    const [arrivalMessage, setArrivalMessage] = useState('');

    // console.log(socket,'dfnjsdhfjksd..........f');

    useEffect(() => {
      console.log(232323232323232323);
        socket.on("receive_message", (data) => {
            console.log(111111111111111111);
            console.log(data,'ooooooooo');
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    },[socket]);


    useEffect(()=>{
       getOldMessages(chatdata._id,token).then((res)=>{
        console.log(res,'yyyyyy');
        setMessagedata(res.data)
        setloadMessage('')
       })
    },[chatdata,loadMessage,arrivalMessage])

    const sendChat =async (e)=>{ 

        if(msg === ''){
           message.error('no text')
        }else{
            setloadMessage(!loadMessage)
        const res =  await createMessage(chatdata._id,senderId,msg,token)   
        console.log(res);
        if(res.status === 200){
            setMsg('')
            setloadMessage(!loadMessage)

        }
        // const recieverId = currentChat.members.find((member) => member !== userId);
        await socket.emit("sendMessage", {
            senderId: senderId,
            recieverId:chatdata._id,
            text: msg,
        });
        // sendMessages(message);

        }




    }
 


  return (
    <div className='sm:w-8/12 justify-between w-full sm:p-0 px-4  h-full'>
                <div className='h-16 w-full  flex'>
                <div className='flex bg-gray-400 w-full h-16 ' >
                    <div className='p-2 w-12 h-12 rounded-full bg-slate-50 m-2'>
                        <AiOutlineUser  className='text-3xl'/>
                       
                    </div>
                    <h1 className='text-xl text-black font-bold p-4'>{chatdata.memdersData[0].name}</h1>
                     
                </div>


                </div>
                <div className='h-400  overflow-scroll scrollbar-hide'>
                { messagedata.map((data,index)=>          
            data.sender !== senderId ? (  <div className='m-2 flex justify-start  '>
               <div className='bg-green-100'>
               <h1 className='p-2 bg-green-100 rounded-xl'>{ data.text}</h1>
              

               </div>

           </div>) :
             

  (<div className='m-2 flex justify-end text-white'>
                        <div className='bg-green-600 rounded-xl justify-end '>

                          <h1 className='text-end p-2 '>{ data.text}</h1>
                        <div className='flex w-full text-end justify-end -mt-2'>
                              <h1 className='text-sm  mr-2 text-end '>{moment(data.createdAt).format('h : mm A')}</h1>

                        </div>
                        </div>

                    </div>)
                    )   }

           {/* {  arrivalMessage  &&    <div className='m-2 flex justify-start  '>
               <div className='bg-green-100'>
               <h1 className='p-2 bg-green-100 rounded-xl'>{ arrivalMessage.text}</h1>
              

               </div>

           </div>} */}


                <div className='h-14 w-full  fixed bottom-0 left-28  placeholder-gray-400 flex p-2 justify-center'>
                  
                     <input
                     type="text"
                     placeholder="type your message here"
                     onChange={(e) => setMsg(e.target.value)}
                     value={msg}
                     className='sm:w-64'
                   />

                    <div className='rounded-full p-1.5 border-2 ml-2 ' onClick={sendChat}>
                        <AiOutlineSend  className='text-xl' />
                    </div>
                </div>
                    {/* <div className='rounded-full p-1.5 border-2 ml-2 '>
                        <BsEmojiSmile  className='text-xl' onClick={handleEmojiPickerhideShow}/>
                        {
                            showEmojiPicker && <Picker className='absolute -top-32 ' onEmojiClick={handleEmojiClick} />
                        } */}

{/* {showEmojiPicker && (
        <div
          className="absolute z-50 bg-white shadow-lg rounded-lg p-2"
      
        >
          <Picker onEmojiClick={handleEmojiClick}  />
        </div>
      )} */}
                    {/* </div> */}

                </div>
                 
            </div>
  )
}

export default Message
