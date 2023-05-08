import React, { useEffect, useState } from 'react'
import moment from 'moment';
import Navbar from 'components/HostNavbar';
import {AiOutlineUser} from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { getuserCar } from 'Api/hostVerify';
import { useNavigate } from 'react-router-dom';
import { createChat } from 'Api/chat';
import { UpdateCompleteOrder } from 'Api/completeOrder';
import { message } from 'antd';
import Loader from 'loader/Loader';



function HostCarListScreen(){
    const [carDetails,setCarDetails] = useState([])
    const [live,setLive] =useState(true)
    const [complete,setComplete] = useState(false)
    const [cars,setCars]=useState(false)
    const [completeOrder,setCompleteOrder]=useState([])
    const [loader,setLoader]=useState(false)

    const [liveOrder,setLiveOrder] = useState([])
    const [orderComplete,setOrderComplete] = useState('')
    const navigate = useNavigate()
    const date = new Date()
    console.log(date,'llllllll');

    const {id,token} = useSelector((state)=>state.userSlice)

    const getChat =async (userId)=>{
      console.log(userId);
      const res = await createChat(id,userId,token)
      console.log(res.data);
      if(res.status === 200){
  
        navigate(`/chat/${userId}` )
      }
    }

    useEffect(()=>{
      setLoader(true)
      getuserCar(id,token).then((res)=>{
        setLoader(false)
        console.log(res);
        if(res.status === 201){
            const orders = res.data.Orders
            const completeOrders = orders.filter(order => order.orderStatus.includes('complete'))
            const liveorder = orders.filter(order => order.orderStatus.includes('pending'))
            setCompleteOrder(completeOrders)
            setLiveOrder(liveorder)
            setCarDetails(res.data.Approved)
        }
      })
    },[orderComplete])
    const handleComplete = async (orderId)=>{
      const res = await UpdateCompleteOrder(orderId,token)
      console.log(res);
      if(res.status === 201){
        setOrderComplete(res.data.data.status)
        message.success('success').then((res)=>{
         

        })

      }
    }

    console.log(orderComplete,'status');
 



    
  return (
    <div className='w-full  h-screen bg-g '>
    <Navbar />
  <div className='lg:mx-14 '>



    <div className='flex w-full '>

        
      <div className='rounded-2xl border-2 text-gray-700 border-gray-300 w-full h-full bg-white m-5 '>
        <div className='w-full h-14 '>
          <h1 className='text-center font-semibold text-3xl'>MY Cars & orders</h1>

        </div>
      <div className='w-full h-14 bg-black flex'>
        <div className={`w-1/3 h-full border-b-8 ${live && 'border-green-600'}  `} onClick={()=>{setCars(false); setComplete(false);setLive(true)}}>
          <h1 className='lg:text-xl text-lg text-center text-white m-4'>LIVE & UPCOMING BOOKINGS</h1>
        </div>
        <div className={`w-1/3 h-full border-b-8 ${complete && 'border-green-600'} `}>
        <h1 className='lg:text-xl text-lg text-center text-white m-4' onClick={()=>{setLive(false);setCars(false); setComplete(true)}}>COMPLETED BOOKING</h1>

        </div>
        <div className={`w-1/3 h-full border-b-8 ${cars && 'border-green-600'} `}  onClick={()=>{setLive(false);setComplete(false);setCars(true); }}>
          <h1 className='lg:text-xl text-lg text-center text-white m-4'>CANCELLED BOOKING</h1>

        </div>

      </div>
      {cars &&
carDetails.map((data,index)=>(
<div className='flex w-full h-40'>
            <div className='w-1/4  h-full border-r-2 border-gray-200'>
            <img src={data.imageCar[0].filesUploaded[0].url} alt="" className='w-48 h-36 items-center text-center' />

          </div>
          <div className='w-1/4 h-full border-r-2 border-gray-200 p-5'>
            <h1 className='text-2xl'>{data.carNumber}</h1>

          </div>
         <div className='h-4/5 w-2/4'>
           <div className='w-full h-10 '>
               <h1 className='items-center  text-center pt-3 text-xl'>SHEDULED PICKUP & DROPOFF</h1>
               <div className='flex justify-between'>
                 <div className='w-6/12 lg:p-6 md:pt-6 pl-1 pt-2'>
                   <h1 className='text-xl '>{moment(data.startDate).format('h : mm A ')}</h1>
                   <h1 className='m'>{moment(data.startDate).format('DD MMM, YYYY')}</h1>

                 </div>
              
                 <div className='w-6/12 lg:p-6 md:pt-6 pl-1 pt-2'>
                 <h1 className='text-xl text-end '>{moment(data.endDtae).format('h : mm A')}</h1>
                   <h1 className='m text-end'>{moment(data.startDate).format('DD MMM, YYYY')}</h1>
                 </div>

               </div>
           </div>
           <div>

           </div>

         </div>
       

         </div>
))
         

      }
      
      {complete &&
completeOrder.map((data,index)=>(
<div className='flex w-full h-48 border-2'>
            <div className='w-1/4  h-full border-r-2 border-gray-200'>
            <img src={data.carData.imageCar[0].filesUploaded[0]?.url} alt="" className='w-48 h-36 items-center text-center' />

          </div>
          <div className='w-1/4 h-full border-r-2 border-gray-200 p-5'>
            <h1 className='text-2xl'>{data.amount}</h1>

          </div>
         <div className='h-4/5 w-2/4'>
           <div className='w-full h-10 '>
               <h1 className='items-center  text-center pt-3 text-xl'>SHEDULED PICKUP & DROPOFF</h1>
               <div className='flex justify-between'>
                 <div className='w-6/12 lg:p-6 md:pt-6 pl-1 pt-2'>
                   <h1 className='text-xl '>{moment(data.startDate).format('h : mm A ')}</h1>
                   <h1 className='m'>{moment(data.startDate).format('DD MMM, YYYY')}</h1>

                 </div>
              
                 <div className='w-6/12 lg:p-6 md:pt-6 pl-1 pt-2 '>
                 <h1 className='text-xl text-end '>{moment(data.endDtate).format('h : mm A')}</h1>
                   <h1 className='m text-end'>{moment(data.startDate).format('DD MMM, YYYY')}</h1>
                 </div>

               </div>
               <div className='w-full '>
                  { data.orderStatus === 'complete' ? <h1 className='text-red-600 font-bold text-lg'>Payment processing... ..</h1> : <h1  className='text-green-600 font-bold text-lg'>Payment Complete</h1>  }
               </div>
           </div>
           <div>

           </div>

         </div>
       

         </div>
))
         

      }

      
       {live &&
      
       liveOrder.map((data,index)=>(
        
        <div className='border-8 border-gray-400 '>
 {  orderComplete  &&  <div className='w-full flex justify-between'>
           <h1>Payment pending</h1>
        </div>}
        <div className='flex w-full h-40'>
        <div className='h-4/5 w-full'>
          <div className='w-full h-10 '>
              <h1 className='items-center  text-center pt-3 text-xl'>SHEDULED PICKUP & DROPOFF</h1>
              <div className='flex justify-between'>
                <div className='w-2/6 lg:p-6 md:pt-6 pl-1 pt-2'>
                  <h1 className='md:text-xl text-lg '>{moment(data.startDate).format('h:mm A') }</h1>
                  <h1 className='m'>{moment(data.startDate).format('DD MMM, YYYY') }</h1>

                </div>
                <div className='w-1/12 flex text-center justify-center '>
                 
                    <div className='w-8 h-8 rounded-full bg-slate-800 mt-7 text-white '>
                      <h1 className='mt-1'>TO</h1>

                    </div>
                            
                </div>
                <div className='w-2/6 lg:p-6 md:pt-6 pr-1 pt-2 items-end '>
                <h1 className='md:text-xl text-lg text-end  '>{moment(data.endDate).format('h:mm A') }</h1>
                  <h1 className='m text-end'>{moment(data.endDate).format('DD MMM , YYYY') }</h1>
                </div>

              </div>
          </div>
          <div>

          </div>

        </div>
        {/* <div className='w-1/4  h-full border-l-2 border-gray-200'> */}
        {/* <button className='b text-red-500 text-lg h-10 m-3 rounded-sm p-2 text-end cursor-pointer hover:text-red-800' onClick={() => {setCancelIndex(index); setOpenExpandModal(true);}}>Cancel order</button>
        <ExpandModal  open={openExpandModal} setOpen={setOpenExpandModal} startDate={pending[cancelIndex]?.startDate} createdAt={pending[cancelIndex]?.createdAt} amount={pending[cancelIndex]?.amount} orderData={pending[cancelIndex]?._id} userId={id} token={token} /> */}

        {/* </div> */}
        {/* <div className='w-1/4 h-full border-l-2 border-gray-200 flex justify-end '> */}
          {/* <button className='b text-red-500 text-lg h-10 m-3 rounded-sm p-2 text-end cursor-pointer hover:text-red-800' onClick={() => {setCancelIndex(index); setOpenModal(true);}}>Cancel order</button>
          <CancelModal  open={openModal} setOpen={setOpenModal} startDate={pending[cancelIndex]?.startDate} createdAt={pending[cancelIndex]?.createdAt} amount={pending[cancelIndex]?.amount} orderData={pending[cancelIndex]?._id} userId={id} token={token} /> */}
        {/* </div> */}

        </div>
        <div className='w-full h-full border-2 '>
             <div className='flex justify-between m-3'>
                <h1 className='text-xl font-semibold'>YOUR CAR OWNER DETAILS</h1>
              

             </div>
             <div className='w-full h-full flex'>
              <div className='w-7/12'>
                <div className=' m-4 font- '>
                  <h1>Car Number : {data.carData.carNumber}</h1>
                  <h1>Number : {data.carData.sNumber}</h1>
                  <h1>City :{data.carData.city} </h1>
                  <h1>Location :{data.carData.neighbourhood} </h1>
                  <h1 className='font-'>From : <span>{data.carData.city}</span></h1>
                    <h1 className='font-'>Car : <span>{data.carData.brand}</span></h1>
                </div>
      
                <div className='justify-between m- flex'>
                  <div className='p-2 text-xl flex'>
                    <h1 className='font-bold
                    '>Payment Amount : </h1>
                    <h1>{data.amount}</h1>
                  </div>


                </div>

              </div>
              <div className='w-5/12 h-48 border-2 '>
                <div className='flex m-5 bg-gray-400'>
                  <img  alt="" className='w-12 h-12 bg-cover m-1' />
                  <h1 className='text-xl m-2'>{data.carData.carNumber} OWNER</h1>
                </div>
                <div className='m-5'>

                <button className='w-full h-14 bg-green-600 rounded-md text-white font-bold 'onClick={()=>getChat(data.userData)} >Chat with owner</button>
                </div>

              </div>

             </div>
             <div className='w-full flex justify-end mb-4'>
                  {new Date(data.endDate) < date  ?  <button className='text-white hover:bg-green-900 font-bold  bg-green-600 p-3 w-32 rounded-xl mr-6 ' onClick={()=>handleComplete(data._id)} >Complete</button> : <button className='text-white font-bold  bg-green-200 p-3 w-32 rounded-xl mr-6  '>Complite</button> }

                 </div>
             
        </div>
        </div>
         )
       )
      }

      </div>

    </div>
  </div>

{loader ?   <Loader loader={loader} /> : null}
     
  
</div>
  )
}

export default HostCarListScreen
