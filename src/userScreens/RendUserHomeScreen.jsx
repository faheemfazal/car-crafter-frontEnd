import React, { useEffect } from 'react'
import Navbar from 'components/Navbar'
import {BiChevronsLeft} from 'react-icons/bi'
import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getcar } from 'Api/findCar'
import moment from 'moment'
import image from '../components/assets/new-suzuki-swift-photo.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import {GrChapterNext} from 'react-icons/gr'
import {AiFillCar} from 'react-icons/ai'
import {AiFillFilter} from 'react-icons/ai'
import Loader from "loader/Loader";





function RendUserHomeScreen() {
    const navigate = useNavigate()
    const [open,setOpen] = useState(false)
    const {selectedDate,selectedTime}=useLocation()
    const [filter,setFilter] = useState('')
    const [filterArray,setFilterArray] = useState([])
    const [loader,setloader] = useState(false)
    const [lowtohigh,setLowtoHigh] = useState('')
    const [car,setCar]= useState([])
    console.log(selectedDate,selectedTime);
    const [reset,setReset] = useState(false)
    const [message,setMessage] = useState('')
    const sutableLocation = localStorage.getItem('sutableLocation')
   console.log(sutableLocation);
    
    const {time,date,location,endDate} = useSelector((state)=>state.userSlice)
    console.log(date,endDate,'tttttttttttttt');

    console.log(date,endDate);

    useEffect(()=>{
        setloader(true)
       getcar(date,location).then((res)=>{
      
        if(res.status === 201){ 
            setloader(false)
            setCar(res.data.car)

        }else{
            setMessage(res.date.message)
            console.log(message);

        }
        console.log(res);
       })
    },[reset])
    
    useEffect(()=>{
        
    },[filterArray,lowtohigh])

    console.log(car,'ddddddddd');

    const FilterTransmission = (data)=>{
        setFilter(data)
        const carFillter =  car.filter(value => value.transmission.includes(data))
        setFilterArray(carFillter)
        
    }

    const findFilter = (data)=>{
        setFilter(data)
        const carFillter =  car.filter(value => value.fual.includes(data))
        setFilterArray(carFillter)
        

    }

    const filterHighToLow = (data)=>{
        if(data ==='LowtoHigh'){
            const pricefil = car.sort((a, b) => a.price - b.price);
            setCar(pricefil)
            console.log(pricefil);
            setLowtoHigh(!lowtohigh)

        }else{
            const pricefil = car.sort((a, b) => b.price - a.price);
            setCar(pricefil)
            console.log(pricefil);
            setLowtoHigh(!lowtohigh)

        }
        
    }

  return (
    <div className='bg-gray-200'>
        <Navbar />
    
    { open && ( <div className='md:visible invisible  md:static absolute w-28 h-12 bg-green-600 mt-5 flex justify-between'>
    <h1 className='text-gray-200 text-2xl m-1'>Filter</h1>
                     <BiChevronsLeft className='text-white text-4xl m-1 ' onClick={()=>setOpen(false)} />
        </div>) }
        <div className='w-full h-full flex bg-gray-200'>
            
           {open ? '' : (<div className='invisible md:static absolute  md:visible md: h-[700px] w-500  bg-white mt-5 '>
                <div className='h-16 bg-green-600 rounded-tr-xl flex justify-between '>
                    <h1 className='text-white text-2xl m-3'>Filter</h1>
                     <BiChevronsLeft className='text-white text-4xl m-3 ' onClick={()=>setOpen(true)} />
                </div>
                <div className='mt-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl ml-2'>Sort by</h1>
                        <h1 className='font-bold text-2xl text-green-600 mr-2 cursor-pointer' onClick={()=>setReset(!reset)}>Reset</h1>

                    </div>
                        <h1 className='text-xl ml-2'>Price</h1>
                    <div className=' border-gray-300 w-full mt-3 ml-2  rounded-lg h-28 flex flex-wrap gap-y-0  '>
                        
                  
                        <div className='w-2/5 h-3/5 border-2 flex flex-col justify-center items-center z-40 cursor-pointer' onClick={()=>filterHighToLow('LowtoHigh')} >
                        <h1>Low to High</h1>
                        </div>
                        <div className='w-2/5 h-3/5 border-2 ml-4 flex flex-col justify-center items-center z-40 cursor-pointer'  onClick={()=>filterHighToLow('HightoLow')}>
                        <h1>High to Low</h1>

                         
                        </div>
                    
               


                    </div>
                  
                </div>
                <hr />
              

                
                <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl'>Seats</h1>
                    </div>
                </div>
                {/* <div className=' border-gray-300 w-full  rounded-lg h-24 flex flex-wrap gap-y-0 p-3 '>
                        <div className='w-1/4 h-4/5 border-2 p-3 items-center'>
                             <h1 className='pt-1'>5 seats</h1>
                        </div>
                        <div className='w-1/4 h-4/5 border-2 p-3 items-center ' onClick={()=>findFilter()} >
                        <h1 className='pt-1'>7 seats</h1>
                           
                        </div>
                        <div className='w-1/4 h-4/5 border-2 p-3 items-center'>
                        <h1 className='pt-1'>8 seats</h1>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 p-3 items-center '>
                        <h1 className='pt-1'>10 seats</h1>

                        </div>
                 </div> */}

                 <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl mt-8'>Transmission</h1>
                    </div>
                </div>
                <div className=' border-gray-300 w-full mt-3 ml-2  rounded-lg h-28 flex flex-wrap gap-y-0  '>
                        
                  
                        <div className='w-2/5 h-3/5 border-2 flex flex-col justify-center items-center z-40 cursor-pointer' onClick={()=>FilterTransmission('Automatic')} >
                        <h1>Automatic</h1>
                        </div>
                        <div className='w-2/5 h-3/5 border-2 ml-4 flex flex-col justify-center items-center z-40 cursor-pointer'  onClick={()=>FilterTransmission('Manual')}>
                        <h1>Manual</h1>

                         
                        </div>
                    
               


                    </div>
              


                 <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl'>fual</h1>
                    </div>
                </div>
              
                 <div className=' border-gray-300 w-full mt-3 ml-2  rounded-lg h-28 flex flex-wrap gap-y-0  '>
                        
                  
                        <div className='w-2/5 h-3/5 border-2 flex flex-col justify-center items-center z-40 cursor-pointer' onClick={()=>findFilter('Diesel')} >
                        <h1>Diesel</h1>
                        </div>
                        <div className='w-2/5 h-3/5 border-2 ml-4 flex flex-col justify-center items-center z-40 cursor-pointer'  onClick={()=>findFilter('Petrol')}>
                        <h1>Petrol</h1>

                         
                        </div>
                    
               


                    </div>
                 {/* <div className='flex p-4'>
                    <AiFillCar className='text-4xl' />
                    <div className='ml-2'>
                    <h1 className='text-xl'>Include specific cars</h1>
                    <p className='text-xs'>Any specific model in mind? Find it here. We will include them to search</p>
                    <input type="text" placeholder='Try search Car' className='border-2 outline-none rounded-sm  ' />
                    </div>
                </div> */}
                <hr />

            </div>)}
     

            <div className='w-full flex flex-col h-screen scrollbar-hide overflow-scroll '>
            <div className='w-full h-28 flex  mt-2 justify-center md:static absolute'>
            <div className='w-5/12 h-24 m-2 ml-5  md:static absolute invisible md:visible' >
                <div className='rounded-xl border-2 border-green-600 h-16 flex pt-1' onClick={()=> navigate('/findPlace',{state:{date:date,location:location,}})}>
                <div className="rounded-full h-6 w-6 bg-green-200 m-3 mt-3 " >
                    <div className="rounded-full h-3 w-3 bg-green-600  relative top-1.5 left-1.5"  >

                    </div>
                   </div>
                    <h1 className='text-black m-3'>{location} . {sutableLocation}</h1>
                 </div>
                </div>
                <div className='w-5/12 h-20 m-2 invisible md:visible md:static absolute ' onClick={()=> navigate('/finddate',{state:{date,time}}) }>
                   <div className='rounded-xl border-2 p-2 border-green-600 h-16 flex justify-between'>
                    <div>
                       <h1 className='font-semibold'>{moment(date).format('DD MMM, YYYY')}</h1>
                       <h1>{ moment(date).format('h:mm A')}</h1>
                    </div>

                    <BsArrowRightShort className='text-3xl m-2' />

                    <div>
                    
                       <h1 className='text-right '>{moment(endDate).format('DD MMM, YYYY') }</h1>
                       <h1 className='text-end'>{ moment(endDate).format('h:mm A') }</h1>

                    </div>

                   </div>
                </div>
              

            </div>
            <div className={`md:absolute w-full static  visible md:hidden  w- h-20 shadow-md flex  justify-between pr-2  `} >
                <div className='h-14 md:w-0 w-10/12 bg-stone-800 rounded-lg m-3 flex  justify-between'>
                   <h1 className='text-xl text-white p-3 z-50' onClick={()=> navigate('/findPlace',{state:{date:date,location:location,}})}>{location}</h1>
                   <div className='flex justify-between p-2 w-6/12 z-50 'onClick={()=> navigate('/finddate',{state:{date,time}}) } >
                    <div className='' onClick={()=> navigate('/finddate',{state:{date,time}}) }   >
                   <h1 className='text-sm font-semibold text-white'>{moment(date).format('DD MMM, YYYY')}</h1>
                   <p className='text-sm text-white'>{ moment(date).format('h:mm A')}</p>
                    </div>
                    <div>
                    <h1 className='text-right text-white text-sm font-semibold'>{moment(date, "DD-MM-YYYY").add('days', 1).format('DD MMM, YYYY') }</h1>

                   <p className='text-white text-right text-sm'>{ moment(endDate).format('h:mm A')}</p>
                    </div>

                   </div>

                </div>

                <div className='w-20 h-20 bg-green-600 rounded-xl p-5 z-50'  >
                    <AiFillFilter className='text-4xl text-white' onClick={()=>navigate('/filter')}/>
                    
                </div>
          

            </div>
         
            <div className='flex gap-10 justify-center flex-wrap items-center py-5 '>
            {  filterArray.map((data,index)=>
                 (<div className='w-90  h-96 ml-3 bg-white  rounded-xl border-2 border-gray-300  '>
                 <div className='h-52 '>
                      <img src={data.imageCar[0].filesUploaded[0].url} alt="this is song" className='bg-cover rounded-t-xl h-full w-80'  ></img>
                 <div className='flex '>
                 <div className=' relative w-9/12 h-8 bg-white rounded-tr-3xl -top-8'>
                     
                 </div>
                 <div className='rounded-full h-14 w-14 relative -top-8 left-2 bg-green-600'>
                 <GrChapterNext className='text-white font-bold m-4 text-2xl' key={index} onClick={()=> navigate(`/carDetails/${data._id}`)} />
                 </div>
               
                 </div>   

                 <div className='-mt-10 '>
                     <h1 className='font-bold ml-2 text-xl'>{data?.brand}. {data.year}</h1>
                 </div>
                 <div className='flex ml-2 mt-2'>
                     <p className=' text-gray-500'>{data?.transmission} .  {data.fual} .  5Seat </p>
                 </div>
                 <hr className='mt-3' />
                 <div className='flex ml-2 mt-2 flex-col'>
                     <h1 className='font-bold'>{data?.price} Ph</h1>
                     <br />
                     <p className=' -mt-4 text-gray-500'>{date?.noOwner} .  {data.features} .  5Seat </p>
                 </div>


                 </div>
                 
              

             </div>)
              )    }
                

                
              {  car.map((data,index)=>
                 (<div className='w-90  h-96 ml-3 bg-white  rounded-xl border-2 border-gray-300  '>
                 <div className='h-52 '>
                      <img src={data.imageCar[0].filesUploaded[0].url} alt="this is song" className='bg-cover rounded-t-xl h-full w-80'  ></img>
                 <div className='flex '>
                 <div className=' relative w-9/12 h-8 bg-white rounded-tr-3xl -top-8'>
                     
                 </div>
                 <div className='rounded-full h-14 w-14 relative -top-8 left-2 bg-green-600'>
                 <GrChapterNext className='text-white font-bold m-4 text-2xl' key={index} onClick={()=> navigate(`/carDetails/${data._id}`)} />
                 </div>
               
                 </div>   

                 <div className='-mt-10 '>
                     <h1 className='font-bold ml-2 text-xl'>{data?.brand}. {data?.year}</h1>
                 </div>
                 <div className='flex ml-2 mt-2'>
                     <p className=' text-gray-500'>{data?.transmission} .  {data?.fual} .  5Seat </p>
                 </div>
                 <hr className='mt-3' />
                 <div className='flex ml-2 mt-2 flex-col'>
                     <h1 className='font-bold'>{data?.price} Ph</h1>
                     <br />
                     <p className=' -mt-4 text-gray-500'>{date?.noOwner} .  {data?.features} .  5Seat </p>
                 </div>


                 </div>
                 
              

             </div>)
              )    }
                
                
            </div>
            </div>
        </div>
        {loader ?   <Loader loader={loader}  /> : null}
        

      
    </div>
  )
}

export default RendUserHomeScreen
