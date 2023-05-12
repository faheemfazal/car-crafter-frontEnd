import { AiOutlineMenu } from "react-icons/ai";
import { BiLeftArrowAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import {BiCurrentLocation} from "react-icons/bi"
import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BiUserCircle} from "react-icons/bi"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { setLogout } from '../redux-toolkit/slice/userReducer';
import SideBarModal from "./modal/SideBarModal";
// import carcrafterlogo  from './assets/carcrafterlogo.png'





const Navbar = ({hide}) => {


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {name,email,location} = useSelector((state)=> state.userSlice)
    console.log(name+"gggg");
    console.log(location);


  const [open, setOpen] = useState(false);
  const loginPage= ()=>{
    navigate('/login')
  }
  const userLogout = ()=>{
     dispatch(setLogout({
      id: null,
      name: null,
      token: null,
      email: null,
      number: null
     }))
  }

  return (
    <div>
      <SideBarModal open={open} setOpen={setOpen} location={location} name={name}/>
      {/* {open ? (
        <>
        
        <motion.div  className="bg-white  w-72  h-screen absolute">
          <BiLeftArrowAlt onClick={()=>{setOpen(false)}} className="bg-white text-dark-purple  text-3xl rounded-full absolute -right-4 top-3 border border-dark-purple" />
         <div className="flex  justify-items-center w-full h-14 bg-dark-purple   duration-75">
          <AiOutlineUser className="pt-3 text-4xl" />
          <motion.button 
          // onClick={loginPage}
               whileHover={{scale:1.1}}
               whileTap={{scale:0.9}}
               onClick={loginPage}
                className=" text-white text-right ml-4  "
                href=""
              >
                Login/Signup
              </motion.button>
              
         </div>
         <div className="flex pt-6 justify-between duration-75 relative">
          <div className="flex">

         <BiCurrentLocation className="text-black text-2xl ml-5"/>
          <button onClick={loginPage}
                className=" text-black text-right ml-4  "
                href=""
              >
               
                Change City
              </button>
          </div>
              <h1 className=" font-bold text-dark-purple mr-1 ">
                {location }
              </h1>
         </div>
      { name && <div className="flex pt-6 justify-items-center duration-75 relative">
         <BiCurrentLocation className="text-black text-2xl ml-5"/>
          <button onClick={userLogout}
                className=" text-black text-right ml-4  "
                href=""
              >
                Logout
              </button>
         </div>}
        </motion.div>
        </>
      ) : (
        <div></div>
      )} */}

      <div className="w-full h-20 bg-black  flex justify-between text-white p-0 md:p-4  items-center  ">
        <div className="md:flex gap- ">
          <div className="p-5 text-3xl pt-14 md:pt-5 drop-shadow-lg font-bold text-white ">
            <div className=" ">

             {/* {open ? ('') : (<AiOutlineMenu className="sm:text-white text-black" onClick={()=>{setOpen(true)}}/>)} */}
             <AiOutlineMenu className="sm:text-white text-white" onClick={()=>{setOpen(true)}}/>
            </div>
            <div></div>
          </div>
          <div className="flex mt-1">
            {/* <img src={carcrafterlogo} alt="" className="h-16 invisible md:visible " /> */}
          <h1 className=" invisible md:visible  font-bold text-2xl text-center pt-3 ">
          CarCrafter
          </h1>
          </div>
        </div>
        <div className="">
          <ul className="md:flex gap-10  uppercase md:p-6  ">
            <li>
              <button 
                className="text-black text-right  md:mt-0 bg-white mt-6  h-12 bg-white-50 border text-xl  sm:h-12 border-gray-300  
                 text- rounded-3xl  focus:border-blue-500 -pt-1  p-2.5 md:before:content-['Become_a_'] drop-shadow-xl 
             " onClick={()=>{navigate('/host')}}
              >
                {" "}
                Host{" "}
              </button>
            </li>
            <li>
            {name ?  ( <p className=" text-white text-right md:mt-3 pt-0  invisible md:visible">{name}</p>) : 
              
              (<button onClick={loginPage}
                className=" text-white text-right md:mt-3 pt-0  invisible md:visible"
                href=""
              >
                Login/Signup 
              </button>)
             
              }
            </li>
          </ul>
        </div>
      </div> 


     
       
       {/* <AnimatePresence mode='wait'
       initial={false}

      

       onExitComplete ={()=> null}

        >
           {modalopen && <ModalLogin modalopen={modalopen} handleClose={closeModal} /> }
       </AnimatePresence> */}

    </div>

  );
};

export default Navbar;
