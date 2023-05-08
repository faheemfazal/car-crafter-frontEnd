import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {FaRegClock} from 'react-icons/fa'
import HostNavbar from 'components/HostNavbar';
import { checkAcc } from 'Api/paymentForOrder';
import { useSelector } from 'react-redux';
import { message } from 'antd';
import Loader from 'loader/Loader';

function HostVerifyScreen() {
    
  const [bankAcc,setAcc]  = useState(false)
    const Navigate = useNavigate();
    const [loader,setLoader]=useState(false)

    const {token,id} = useSelector((state)=>state.userSlice)

    console.log(token,id);
    useEffect(()=>{
      setLoader(true)
       checkAcc(id).then((res)=>{
        setLoader(false)
          console.log(res);
          if(res.status === 201){
            setAcc(true)
          }
       })
    },[])

    const gotoCarlist =()=>{
      if(bankAcc){
        Navigate('/hostUserCarList')
      }else{
        message.error('fill bank account')
      } 
    }
  
  return (
    <>
    <HostNavbar />

    <div className="flex flex-col items-center justify-center h-full bg-gray-100">

    <div className="bg-white p-6 rounded-md shadow-md flex flex-col items-center justify-center space-y-6">
      <div className="text-5xl text-blue-500">
        <FaRegClock />
      </div>
      <h1 className="text-3xl font-bold text-center">
        We Are Verifying your Data
        Profile Under Verification
      </h1>
      <p className="text-lg text-center">
        Thank you for submitting your profile! We are currently reviewing it
        and will notify you once it has been verified.
      </p>
      <p className="text-lg text-center">
        In the meantime, please ensure that your profile information is up to
        date and accurate.
      </p>
      <h1 className="text-3xl font-bold text-center">
       
       Account & Profile Under Verification
      </h1>
      <div>
      <button
        onClick={()=>Navigate('/bankDetail')}
        className="bg-green-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
      >
        check bank Account
      </button>
      <button
        onClick={gotoCarlist}
        className={`${bankAcc ? 'bg-green-600' : ' bg-gray-500'} hover:bg-gray-500 ml-2 text-white font-bold py-2 px-4 rounded`}
      >
        Your Cars
      </button>
   
      </div>
     
    </div>
{loader ?   <Loader loader={loader} /> : null}

  </div>
  </>
  )
}

export default HostVerifyScreen
