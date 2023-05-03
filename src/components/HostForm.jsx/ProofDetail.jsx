import HostNavbar from "components/HostNavbar";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PickerOverlay } from "filestack-react";
import CarDetailsForm from "components/modal/CarDetailsForm";
import { message } from "antd";

function ProofDetail() {

  const [isPicker, setIsPicker] = useState(false);
  const [isPickerIC, setIsPickerIC] = useState(false);
  const [imageRC, setimageRC] = useState('')
  const [imageIC, setimageIC] = useState('')
  const [isOpen,setIsOpen] =useState(false)
  const [slider, setSlider] = useState(500000);
  const [carNumber, setCarNumber] = useState(null);
  const handleChange = (event) => {
    setSlider(event.target.value);
  };

  const fileStackActiveRC =(e)=>{
    e.preventDefault()
    
    if (isPicker){
        setIsPicker(false)
    }else{
      setIsPicker(true)
    }
  }
  const fileStackActiveIC = (e)=>{
    e.preventDefault()
    
    if (isPickerIC){
      setIsPickerIC(false)
    }else{
      setIsPickerIC(true)
    }
  }

  const rcVerify = async (e) => {

    if(imageRC && imageIC && carNumber){ 
      setIsOpen(true)
    
    }else{    
      
      message.error('fill full details')
      
    }

  };
  const filestackClientID = process.env.REACT_APP_FILESTACK_API_KEY;
  console.log( process.env.REACT_APP_FILESTACK_API_KEY,'////////////');

  let { number, email } = useSelector((state) => state.userSlice);

  return (
    <div className="flex flex-col">
      <HostNavbar />
      <div className="container mx-auto">
        <div className="w-full h-32 bg-slate-100 ">
          <h1 className="text-xl font-bold">Choise CAr Host - india</h1>
          <p className="text-sm lg:text-lg">
            Share few more details and move one step closer to EARNING up to
            ₹50,000 per month. Get up to 5000 bonus on successful sign-up to the
            program 🚘 💵 🥳
          </p>
        </div>
        <div className="flex flex-row pt-3">
          <div className="w-1/2 mt-3 ml-8">
            <input
              type="number"
              name="number"
              className="w-4/5 h-16 pl-4 mt-1 text-2xl text-gray-700 border outline-none lg:w-383 rounded-2xl focus:outline-dark-purple"
              value={number}
              placeholder= {number}
            ></input>
            <input
              type="text"
              name="carName"
              
              className="w-4/5 h-16 pl-4 mt-12 text-2xl uppercase  text-gray-700 border outline-none lg:w-383 rounded-2xl focus:outline-dark-purple"
              placeholder="Car Number*"
              onChange={(e) => setCarNumber(e.target.value)}
            ></input>
          </div>
          <div className="w-1/2 mt-3">
            <input 
              type="email"
              name="email"
              className="w-4/5 h-16 pl-4 mt-1 text-2xl text-gray-700 border outline-none lg:w-383 rounded-2xl focus:outline-dark-purple"
              value={email}
              placeholder={email ? email : 'Email'}
            ></input>
            <div>
              <span className="relative text-lg top-16"> Car KM driven </span>
              <div className="relative flex items-center justify-center mt-12 slidervalue bg-dark-purple ">
                <span className="absolute w-16 h-6 text-center text-white rounded-xl bg-green-600 ">
                  {slider}
                </span>
                <div className="relative w-5"></div>
              </div>
              <div className="relative flex items-center justify-center mt-3 field ">
                <div className="valueleft ">0</div>
                <input
                  type="range"
                  min={0}
                  max={1000000}
                  className="relative flex items-center justify-center w-4/5 pl-4 text-gray-700 lg:w-383 field "
                  value={slider}
                  onChange={handleChange}
                  step="1"
                />

                <div className="valueRight ">1000000</div>
              </div>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-row pt-3 ">
          <div className="w-1/2 m-8 mt-3 h-52 bg-blue-50">
            <div className="flex-col w-full px-1 py-1 bg-blue-100 shadow-md h-36 ">
              {
                imageRC ? (<img src={imageRC && imageRC.filesUploaded[0].url} 
                  alt="imageUploded" 
                  className="object-cover w-full h-full " />
                  ) : (

              <button className="w-full h-full text-lg font-bold border-2 rounded-md  border-green-600" onClick={fileStackActiveRC}>
                Upload your RC
              </button>
                  )
                
              }
            </div>
            <input
              type="text"
              name="title"
              className="w-full h-12 pl-4 mt-1 text-2xl text-gray-700 border outline-none rounded-2xl focus:outline-dark-purple"
              placeholder="Image Title"
            ></input>
            <div>
            {isPicker && (
              
                <PickerOverlay
                  apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                  onSuccess ={(res) =>{
                    console.log(res)
                     setimageRC(res)
                     console.log(imageRC);
                     setIsPicker(false)
                  }
                    }
                  onError={(res) => alert(res)}
                  pickerOptions={{
                    maxFiles:1,
                    // errorsTimeout : 2000,
                    // maxSize : 1 * 1000 * 1000

                  }}
                />
              )}
            </div>
           
          </div>
          <div className="w-1/2 m-8 mt-3 h-52 bg-blue-50">
            <div className="flex-col w-full px-1 py-1 bg-blue-100 shadow-md h-36 ">
            
              {
                imageIC ? (<img src={imageIC && imageIC.filesUploaded[0].url} 
                  alt="imageUploded" 
                  className="object-cover w-full h-full " />
                  ) : (

                    <button className="w-full h-full text-lg font-bold border-2 rounded-md  border-green-600" type="submit" onClick={fileStackActiveIC}>
                    Upload your Adar or (any adentity prof)
                  </button>
                  )
                
              }
            </div>
            <input
              type="text"
              name="password"
              className="w-full h-12 pl-4 mt-1 text-2xl text-gray-700 border outline-none rounded-2xl focus:outline-dark-purple"
              placeholder="Image Title"
            ></input>

            {/* fileStrack */}
            <div className="relative mt-3 ">
          
                 {isPickerIC && (
                <PickerOverlay
                  apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                  onSuccess ={(res) =>{
                    console.log(res)
                     setimageIC(res)
                     console.log(imageIC);
                     setIsPickerIC(false)
                  }
                    }
                  onError={(res) => alert(res)}
                  pickerOptions={{
                    maxFiles:1,
                    // errorsTimeout : 2000,
                    // maxSize : 1 * 1000 * 1000

                  }}
                />
              )}
            </div>
          </div>
        </form>
        <div className="flex justify-center ">
          <button
            className="items-center h-16 text-center text-white rounded-md bg-green-600 w-400 "
            placeholder="Enter number"
            onClick={rcVerify}
          >
            CONTINUE
          </button>
          <CarDetailsForm open={isOpen} onclose={()=> setIsOpen(false)} setopen={setIsOpen} imageRC={imageRC} imageIC={imageIC} km={slider} carNumber={carNumber} email={email} >
                <h1>hello bro</h1>
          </CarDetailsForm>
        </div>
      </div>
    </div>
  );
}

export default ProofDetail;
