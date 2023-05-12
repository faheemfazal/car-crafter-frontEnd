import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../../redux-toolkit/slice/userReducer';
import { useDispatch } from 'react-redux';
import { numberCheck } from 'Api/userAuth';


function HostNumberVF({open,setOpen,children}) {
  const [number,setNumber] = useState('')
  const navigate = useNavigate()
  const hostverify = async (e)=>{
    e.preventDefault();
    const res = await numberCheck(number) 
    if (res.status=== 201) {
      navigate('/signup',{ state: { number:number} })
    }else{
      navigate('/otp',{state:{number:number}})
    }
   
  }
    
    if(!open) return null;
  return (
    <>
    <div className='fixed top-0 bottom-0 bg-black rounded z-5 0 right-0 left-0 opacity-80' onClick={()=>setOpen(false)} />
    <div className="fixed z-50 p-3  bg-white lg:right-350px top-60 left-20 right-20 bottom-56 rounded-2xl lg:left-350px border-2 border-stone-600 shadow-2xl">
      <h1 className='sm:text-2xl font-bold text-black text-xl'>Please enter your phone number for Login</h1>
      <div>
      <form className=" flex flex-col justify-between " onSubmit={hostverify} >
              <div className="pt-5 flex justify-center">
              <input type="number" className="  placeholder:text-2xl border rounded-2xl h-16 w-1/5  outline-none focus:outline-dark-purple" placeholder="+91 " ></input>
              
                 
                <input type="number" className="placeholder:text-2xl border text-black text-2xl rounded-2xl h-16 w-3/5 ml-5 outline-none focus:outline-dark-purple"  placeholder="Enter number"
              value={number}
              onChange={(e)=>{setNumber(e.target.value)}}
                />
                </div>
             
               <div className='m-4 mt-12 flex justify-center'>

                 <button className="bg-green-600 w-400  text-white rounded-md h-16" type="submit" >CONTINUE</button>

               </div>
             
              </form>
      </div>
    </div>
    {children}
    </>
  )
}

export default HostNumberVF
