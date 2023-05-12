import React, { useEffect, useState } from 'react'
import {AiFillCar,AiOutlineClose} from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { getcar } from 'Api/findCar'
import {BiChevronsLeft} from 'react-icons/bi'


function FilterModal() {
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

//   const navigate = useNavigate()
  return (
<div className='flex flex-col items-center justify-center h-screen w-screen'>
  <div className='w-screen h-20 bg-green-600 flex justify-between'>
    
   <h1 className='text-3xl p-2 text-white '>Filter</h1>
   <AiOutlineClose className='text-3xl text-white m-4 font-bold ' onClick={()=>navigate('/home')}/>


  </div>
  <div className=' md: h-[700px] w-500  bg-white mt-5 justify-center items-center'>
              
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

            </div>
  <div className=' w-screen h-20 items-center text-white shadow-3xl border-2 text-center '>
    <button className='items-center bg-green-600 w-383 m-3 h-12 rounded-sm text-2xl font-semibold'>Find</button>

  </div>
</div>
  )
}

export default FilterModal
