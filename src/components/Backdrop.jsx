import { motion } from "framer-motion";   

const Backdrop = ({children,onclick})=>{
    return(
        <motion.div className="flex flex-col items-center w-full h-screen text-center bg-center bg-cover"
        onClick={ onclick}
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth, transition:{duration :0.3} }}>
        <div className="flex flex-col justify-between w-screen h-screen text-center md:w-600">
            <div >
          <AiOutlineArrowLeft className="m-5 text-2xl" onClick={()=>{navigate('/number')}} />
          <h1 className="m-5 text-2xl text-left">
            Enter 6-digit OTP
          </h1>
          </div>
          <div className="-mt-16 h-1/2 ">
        
          
             
            <input type="text" className="h-16 ml-5 border outline-none placeholder:text-2xl rounded-2xl w-400 focus:outline-dark-purple"  placeholder="Enter OTP" />
          </div>
          <div className="">
            <button className="ed-md tex t-white mt -16 h bg-dark-purple w-400" placeholder="Enter number">CONTINUE</button>
          </div>
          <p></p>
          
         
          

        </div>

    </motion.div>
    )
}