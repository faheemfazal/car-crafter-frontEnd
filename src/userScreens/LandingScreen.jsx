import {React,useState} from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { getLandingLocations } from "Api/LocationAdd";
import { setLogin } from "../redux-toolkit/slice/userReducer";
import { Link } from "react-router-dom";
import Footer from "components/Footer";
import Loader from "loader/Loader";



const Landing = ()=>{
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loader,setLoader]=useState(false)
    const [state,setState]= useState(false)
    const [locations,setLocations] = useState([])
    const reduxstate = useSelector((state)=>state.userSlice)


    const placeData=(location)=>{
 
        dispatch(setLogin({
            ...reduxstate,
            location:location
        }))
        navigate("/place")
    }

    useEffect(()=>{
        setLoader(true)
        getLandingLocations().then((res)=>{
            setLoader(false)
            setLocations(res)
        })
    },[])
   

    return(
        <motion.div className="w-full h-screen bg-cover bg-center flex flex-col items-center  "
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x: window.innerWidth, transition:{duration :0.1} }}>
            <div className="bg-Landingimage w-full h-1/4 bg-cover bg-center  items-center sm:h-1/2 flex ">
                {/* <h1>CarCrafter</h1> */}

                <div className=" flex justify-center">
              
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center' >
        <p className='text-[#00df9a] md:text-4xl text-2xl font-bold p-2' ></p>
          
          
            <div className=' justify-center items-center w-full sm:-mt-28 GYU absolute  ' >
               <h1 className="sm:text-4.563rem text-4xl text-green-600 font-bold    left-[48%]">CarCrafter</h1>
               <h1 className="sm:text-4xl text-2xl text-black font-bold sm:-mt-8 -mt-4  left-[48%]">Never Give Up</h1>

               
            </div>

           <Link to="/nearbyservices" >
          {/* <button className='bg-[#00df9a] h-10 text-center w-[200px] mx-auto my-10 rounded-md'>Get Start</button> */}
          </Link> 
      </div>


                </div>
            
                 
            </div>
            <div className="w-full text-center items-center z-50 h-1/2  ">
                <p className="m-5 text-xl sm:text-2xl ">
                Experience the open road. Rent a car for your next journey.
                </p>
                <h1 className="text-3xl">
                    Select a defferent location
                </h1>

                 <input  className="placeholder:text-2xl  w-8/12 mt-6 sm:mt-12 h-16 bg-white-50 border sm:w-600 sm:h-20 border-gray-300  text-sm rounded-3xl  focus:border-blue-500  p-2.5"  
                   type="text" placeholder="Select Location" onClick={(e) => {e.preventDefault(); setState(!state)}} >
                    
                   </input>
               
                { state ?
                    
             (   <div className="w-8/12  sm:w-600     mx-auto  bg-white  rounded-lg border-stone-300 border-2 p-2 "  >
                   { locations?.map((data,index)=>
                    (<button className="text-left pl-8 cursor-pointer   w-full h-12 font-bold bg-white hover:bg-slate-100 pt-1 "  value={data.city} onClick={()=>placeData(data.city)} key={index} >{data.city}</button>)
                   )}
                  </div> ) : (<div className="sm:h-52 h-28">

                  </div>)
                  } 
                
          {loader ?   <Loader loader={loader} /> : null}
            </div>
      <Footer />
         
    

        </motion.div>
    )
}

export default Landing;