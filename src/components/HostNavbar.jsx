import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../redux-toolkit/slice/userReducer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import HostNumberVF from "./modal/HostNumberVF";
import {AiTwotoneBank} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import {SiTask} from 'react-icons/si'


function HostNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [numberModal,setNumberModal] =useState(false)

  const { name,token } = useSelector((state) => state.userSlice);

  const handleHostForm = ()=>{
    if(token){
      navigate('/host/form')
    }else{
      setNumberModal(true)
      console.log('set');
      
    }
  }

  const loginPage = () => {
    navigate("/login");
  };
  const userLogout = () => {
    dispatch(
      setLogout({
        id: null,
        name: null,
        token: null,
        email: null,
      })
    ).then(data => navigate('/host/home'))

  };
  return (
    <div className='z-30  sticky top-0'>
       
      {open ? (
        < motion.div
          // initial={{ width: 0 }}
          // animate={{ width: "" }}
          // exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
          className={openRight ? "bg-slate-300 w-56 md:w-72 h-screen absolute right-0 " : "bg-slate-300  w-56 md:w-96 h-screen absolute"}
        >
          <BiLeftArrowAlt
            onClick={() => {
              setOpen(false);
              setOpenRight(false)
            }}
            className={openRight ? "bg-white text-green-600  text-3xl rounded-full absolute -left-4 rotate-180 top-4 border mt-2 border-green-600" : "bg-white text-dark-purple  text-3xl rounded-full absolute -right-4 top-3 border border-dark-purple"}
          />
          <div className="flex  justify-items-center w-full h-20 bg-green-600  duration-75">
            <AiOutlineUser className="m-4  text-4xl  text-white"  />
            <motion.button
              // onClick={loginPage}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={loginPage}
              className=" text-white text-right ml-4  "
              href=""
            >
              Login/Signup
            </motion.button>
          </div>
          <div className="flex pt-6 justify-items-center duration-75 relative">
            <BiCurrentLocation className="text-black text-2xl ml-5" />
            <button
              onClick={loginPage}
              className=" text-black text-right ml-4  "
              href=""
            >
              Change City
            </button>
          </div>
          <div className="flex pt-6 justify-items-center duration-75 relative">
            <AiTwotoneBank className="text-black text-2xl ml-5" />
            <button
              onClick={()=>navigate('/bankDetail')}
              className=" text-black text-right ml-4"
              href=""
            >
              Change Account
            </button>
          </div>
          <div className="flex pt-6 justify-items-center duration-75 relative">
            <SiTask className="text-black text-2xl ml-5" />
            <button
              onClick={()=>navigate('/hostUserCarList')}
              className=" text-black text-right ml-4"
              href=""
            >
              Orders & car 
            </button>
          </div>
          {name && (
            <div className="flex pt-6 justify-items-center duration-75 relative">
              <BiLogOut className="text-black text-2xl ml-5" />
              <button
                onClick={userLogout}
                className=" text-black text-right ml-4  "
                href=""
              >
                Logout
              </button>
            </div>
          )}
        </motion.div>
      ) : (
        <div></div>
      )}
      <div className=" w- h-20 bg-black  flex justify-between text-white p-4   items-center  ">
        <div className=" text-3xl  drop-shadow-lg font-bold text-white ">
          <div className=" container mx-auto flex flex-row   ">
            {open ? (
              ""
            ) : (
              <AiOutlineMenu
                className="sm:text-white text-white h-8  w-12 invisible  md:visible absolute md:fixed "
                onClick={() => {
                  setOpen(true);
                  
                }}
              />
            )}
            <h1 className={open ? 'invisible' :"font-bold text-2xl text-center md:ml-16 ml-0  "}>
            CarCrafter
            </h1>
          </div>
        </div>
        <div className=" flex  ">
        {name ?  ( <p className=" text-white text-right md:mt-3 pt-0  invisible md:visible">Logout</p>) : 
              
              (<button onClick={loginPage}
                className=" text-white text-right md:mt-3 pt-0  "
                href=""
              >
                Login/Signup 
              </button>)
             
              }

              {/* <button className=" ml-3 bg-green-600   text-white rounded p-2 " onClick={handleHostForm}>
                START EARNING*.
              </button> */}
              <HostNumberVF />

              <HostNumberVF open={numberModal}  onclose={()=> setNumberModal(false)} setOpen={setNumberModal}>

              </HostNumberVF>
              {open ? (
              ""
            ) : (
              <AiOutlineMenu
                className="sm:text-white text-white h-6  w-10 visible  md:invisible  mt-2 ml-2  md:absolute "
                onClick={() => {
                  setOpen(true);
                  setOpenRight(true)
                }}
              />
            )}

        </div>
      </div>
     
    </div>
  );
}

export default HostNavbar;
