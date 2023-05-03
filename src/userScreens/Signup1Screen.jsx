import React from 'react'
import { motion } from "framer-motion";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate,useLocation } from "react-router-dom";
import Navbar from 'components/Navbar';
import {axiosuser} from '../axiosLink/axios';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setLogin } from '../redux-toolkit/slice/userReducer';
             




function Signup1Screen() {
  const navigate = useNavigate([])
  const dispatch = useDispatch()
  const registerForm =useRef()
 
  
  
  const {state} = useLocation();
  console.log(state);
  const number= state.number
  


  const signup = async (e)=>{

    e.preventDefault()
    const email = registerForm.current.email.value;
    const name = registerForm.current.name.value
    const password = registerForm.current.password.value

      const  response = await axiosuser({
        url : "/signup",
        method:'post',
        data:{
          number,
          email,
          name,
          password
        }
      })
      const result = response.data
      if(result.auth){
        localStorage.setItem("token", JSON.stringify(result));
        console.log(result)
        dispatch(setLogin({
           user:'user',
           id: result.id,
           name: result.name,
           token: result.token,
           email: result.email,
           number:result.number
        }))
       
        
        navigate('/place') 
      }else{
        
      }
  }
  

  return (
   
    <div className="bg-homepage bg-cover bg-center  relative  ">
    <Navbar />
    <motion.div className="w-full  bg-cover bg-center flex flex-col text-center items-center"
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration :0.2} }}>
        <div className=" h-  md:w-600  text-center flex flex-col justify-between ">
            <div >
          <AiOutlineArrowLeft className="ml-5 text-2xl " onClick={()=>{navigate('/number')}} />
          <h1 className="text-left ml-5 text-2xl">
          Please Fill Some Details
          </h1>
          <p className='text-left ml-5'>One last step to create a new account</p>
          </div>
          <form className="h-614 mt-5  flex flex-col justify-between" ref={registerForm} >
          <div className="">
          <input type="text"  className=" bg-flag  text-2xl text-gray-700 border rounded-2xl h-16 w-28  outline-none focus:outline-dark-purple pl-4" placeholder="+91"value={'+'+91} ></input>
        
             
            <input type="number" name='Number' className="text-2xl border text-gray-400 rounded-2xl h-16 w-350 ml-5 outline-none focus:outline-dark-purple pl-4"  placeholder={number} 
    
            />
          <input type="email" name='email'  className="w-383 pl-4  mt-4  text-2xl text-gray-700 border h-16 rounded-2xl  outline-none focus:outline-dark-purple" placeholder="Email" ></input>
          <input type="text" name='name'  className="w-383 pl-4  mt-4   text-2xl text-gray-700 border h-16 rounded-2xl   outline-none focus:outline-dark-purple" placeholder="Name (As Per Driving License)" ></input>
          <input type="text" name='password'   className="w-383 pl-4 mt-4   text-2xl text-gray-700 border h-16 rounded-2xl   outline-none focus:outline-dark-purple" placeholder="password" ></input>
          



          </div>
          <div className="">
            <button className="bg-dark-purple w-400  text-white rounded-md h-16  mb-10 " placeholder="Enter number" type="submit"onClick={signup}  >CONTINUE</button>

          </div>
          </form>
    
          
         
          
         
          

        </div>

    </motion.div>
    </div>
  )
}

export default Signup1Screen
