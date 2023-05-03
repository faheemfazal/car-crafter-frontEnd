import React, { useEffect } from "react";
import { motion } from "framer-motion";
import HostNavbar from "components/HostNavbar";
import ImageSlider from "components/ImageSlider";
import { useNavigate } from "react-router-dom";
import image from '../components/assets/c305b40c67077b3849c25a445c6191d8.png'

function HostHomeScreeen() {
  const slider = [
    { url: "bg-Landingimage", title: "Share your car and earn upto 5000 Rs" },
    { url: "bg-homepage", title: "Share your car and save the environment" },
    { url: "bg-loginImg", title: "Share your car and save the environment" },
    {
      url: "bg-Landingimage",
      title: "Share your car and save the environment",
    },
    {
      url: "bg-Landingimage",
      title: "Share your car and save the environment",
    },
  ];
  
  
  useEffect(() => {}, []);
  const navigate = useNavigate()

  return (
    <motion.div
      className="  w-full h-screen flex-col"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      // onclick={onclick}
    >
      <div className="h-5/6">
        <HostNavbar />
        {/* <div className="w-full  h-16 absolute sticky  bottom-2 left-0 bg-green-600 visible lg:invisible rounded-2xl  " onClick={()=>{navigate('/host/form')}}>
          <h1 className="text-white text-2xl text-center m-3">START EARNING</h1>
        </div> */}
      </div>

      <div className=" m-0   ">
        <ImageSlider slider={slider} />
      </div>
      <div>
      <div className="w-full  lg:px-28 px-4 md:pt-14 ">
        <div >
           <h1 className="text-xl text-gray-500">How to earn money with CarCrafter</h1>
           <h1>    CarCrafter Host is a program where car owners in Pune can earn money by sharing their car with other individuals. CarCrafter host ensures a safe and seamless earning journey for you and your car
           </h1>
           <img src={image} alt="fvsdfgsdfsgdfg" className="h-5/6" />
        </div>

      </div>

      </div>
       <div className="w-full  h-16 absolute sticky  bottom-2 left-0 bg-green-600 visible lg:invisible rounded-2xl  " onClick={()=>{navigate('/host/form')}}>
          <h1 className="text-white text-2xl text-center pt-3 m-3">START EARNING</h1>
        </div>
    
    </motion.div>
  );
}

export default HostHomeScreeen;
