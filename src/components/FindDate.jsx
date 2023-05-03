import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import { useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import DatePicker  from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { setLogin } from 'redux-toolkit/slice/userReducer'

function FindDate() {


    const navigate = useNavigate()
    const minDate = new Date(); 
    const maxDate = new Date('2023-12-31T00:00');
    const [selectedDate,setSelectedDate]=useState()
    const [endDate,setEndDate] = useState()
    const {date,time} = useSelector((state)=>state.userSlice)
    const state = useSelector((state)=>state.userSlice)
    const dispatch = useDispatch()
    
   
    useEffect((selectedDate)=>{
        
        setSelectedDate( moment(date).toDate())
        setEndDate(moment(selectedDate).add('days', 1).toDate())

    },[])

    const changeDate =()=>{
      console.log('...........');
      console.log(selectedDate);
      console.log(endDate);
      console.log('.............');
        dispatch(setLogin({
           ...state,
           date:selectedDate,
           endDate:endDate
        }))
        navigate('/home')
    }
    
  



    const handleStartDateChange = (date) => {
        setSelectedDate(date);
        setEndDate(moment(date).add('hours', 1).toDate())
        
    };
    console.log(selectedDate,'111111111');

    const handleEndDateChange= (date)=>{
        setEndDate(date)
        
    }  
    console.log(endDate,'22222222222222')

  return (
    <div>
        <Navbar />
        <div className='container mx-auto '>
        <div className='flex w-full justify-center'>
           <AiOutlineArrowLeft className="ml-5 mt-5 text-2xl" onClick={()=>{navigate('/home')}} />
           <h1 className=' text-2xl m-3'>Chose Your Date & Time</h1>
        </div>
        <div className='m-8 flex flex-row justify-center'>
        <div className="  flex flex-col  justify-center items-center "  >
               <div className='m-auto  sm:flex w-full  '>
                <div>

                <h1 className='text-lg font-semibold'>When you start your trip </h1>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleStartDateChange}
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  minDate={new Date()} maxDate={maxDate}
                  calendarClassName="bg-white shadow-lg rounded-lg py-4 px-2 absolute top-10"
                  className='appearance-none m-3   mr-8 text-xl bg-slate-200  h-full inline-block  '
                />
                </div>

                <div className='w-12'>
                </div>
                <div>
                <h1 className='text-lg font-semibold sm:mt-0 mt-4'>When you end your trip </h1>
                                <DatePicker
                  selected={endDate}
                  onChange={handleEndDateChange}
                  calendarClassName="bg-white shadow-lg rounded-lg py-4 px-2 absolute top-10"
                  showTimeSelect
                  dateFormat="yyyy-MM-dd HH:mm"
                  minDate={endDate} maxDate={maxDate}
                  className='appearance-none m-3 ml-5   mr-8 text-xl bg-slate-200  h-full inline-block  '
                />

                </div>
                
                </div>   

       </div>
       </div>

        </div>
       <div className=' w-screen h-20 items-center text-white shadow-3xl border-2 text-center fixed bottom-0'>
         <button className='items-center bg-green-600 w-383 m-3 h-12 rounded-sm text-2xl font-semibold' onClick={changeDate} >Find</button>

       </div>
    </div>
  )
}


export default FindDate
