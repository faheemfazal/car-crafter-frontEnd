
import { motion } from "framer-motion";
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {axiosuser}  from "../axiosLink/axios";
import Navbar from "components/Navbar";
import { numberCheck } from "Api/userAuth";
import { FormValidate } from "Helpers/formValidation";
import { validatePhone } from "Helpers/formValidation";



export const Number=()=>{

  const [number,setNumber]=useState(null)
  const [formData, setFormData] = useState({ number: "", });
  const [errors, setErrors] = useState({});
    

  const handleInputChange = (event) => {
    setNumber(event.target.value)
    console.log(event.target.value,event.target.name,'llllllllllll');
   
};

const validateForm = () => {
  const newErrors = validatePhone({number})
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};



      async function numberVerify(e){
    try{
     
      e.preventDefault()
      
      if (!validateForm()) return;
      const res = await numberCheck(number)
 
      console.log(res);
      if (res.status=== 201) {
        navigate('/signup',{ state: { number:number} })
      }else{
        navigate('/otp',{state:{number:number}})
      }

    }catch{

    }
  }
  

    const navigate =useNavigate()
    return(
      <div className="bg-white bg-cover bg-center h-screen relative  ">
      <Navbar />
        <motion.div className="w-full  bg-cover bg-center flex flex-col text-center items-center"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition:{duration :0.2} }}>
            <div className="  w-screen md:w-600  text-center flex flex-col justify-between">
                <div className="h" >
              <AiOutlineArrowLeft className="ml-5 mt-5 text-2xl" onClick={()=>{navigate('/login')}} />
              <h1 className="text-left ml-5 mt-5 text-2xl ">
                Enter Mobile Number
              </h1>
              </div>
              <form className="h-[548px] flex flex-col justify-between" onSubmit={numberVerify}>
              <div className="pt-5">
              <input type="number" className="  placeholder:text-2xl border rounded-2xl h-16 w-28  outline-none focus:outline-dark-purple" placeholder="+91  " ></input>
              
                 
                <input type="number" className="placeholder:text-2xl text-xl border rounded-2xl h-16 w-350 ml-5 outline-none focus:outline-dark-purple"  placeholder="Enter number"
                value={number}
                onChange={handleInputChange}
                // onChange={(e)=>{setNumber(e.target.value)}}
                />
                  {errors.number && (<p className="text-red-500 mt-1 text-xs italic"> {errors.number}</p>)}
              </div>
              <div className="  ">
                <button className="bg-green-600 w-400  text-white rounded-md h-16    "  type="submit" >CONTINUE</button>
              </div>
              </form>
            </div>

        </motion.div>
        </div>
    )
}


