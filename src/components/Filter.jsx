import React from 'react'
import {AiFillCar,AiOutlineClose} from 'react-icons/ai'
import { Navigate, useNavigate } from 'react-router-dom'


function FilterModal() {

  const navigate = useNavigate()
  return (
<div className='flex flex-col justify-between h-screen w-screen'>
  <div className='w-screen h-20 bg-green-600 flex justify-between'>
    
   <h1 className='text-3xl p-2 text-white '>Filter</h1>
   <AiOutlineClose className='text-3xl text-white m-4 font-bold ' onClick={()=>navigate('/home')}/>


  </div>
  <div className='h-full overflow-auto'>
  <div className='m-3'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl'>Sort by</h1>
                        <h1 className='font-bold text-2xl text-green-600 '>Reset</h1>

                    </div>
                    <div className=' border-gray-300 w-full  rounded-lg h-48 flex flex-wrap gap-y-0  '>
                        <div className='w-1/4 h-2/5 border-2 flex flex-col justify-center items-center '>
                        <h1>Distence</h1>
                        </div>
                        <div className='w-1/4 h-2/5 border-2  flex flex-col justify-center items-center '>
                        <h1>Distence</h1>
                         
                        </div>
                        <div className='w-1/4 h-2/5 border-2  flex flex-col justify-center items-center '>
                        <h1>Distence</h1>

                        </div>
                        <div className='w-1/4 h-2/5 border-2  flex flex-col justify-center items-center '>
                        <h1>Distence</h1>

                        </div>
                        <div className='w-2/4 h-2/5 border-2  flex flex-col justify-center items-center '>
                        <h1>Distence</h1>

                        </div>
                         <div className='w-2/4 h-2/5 border-2  flex flex-col justify-center items-center '>
                         <h1>Distence</h1>

                        </div>
               


                    </div>
                    <hr />
                <div className='flex p-4'>
                    <AiFillCar className='text-4xl mt-3' />
                    <div className='ml-2'>
                    <h1 className='text-2xl '>Include specific cars</h1>
                    <p className='text-lg mt-2'>Any specific model in mind? Find it here. We will include them to search</p>
                    <input type="text" placeholder='Try search Car' className='border-2 outline-none rounded-sm w-full h-10 text-xl mt-2 ' />
                    </div>
                </div>
                <hr />

                <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl'>Seats</h1>
                    </div>
                </div>
                <div className=' border-gray-300 w-full  rounded-lg h-24 flex flex-wrap gap-y-0 p-3 '>
                        <div className='w-1/4 h-4/5 border-2 p-4 items-center'>
                       
                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                 </div>

                 <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl'>Transmission</h1>
                    </div>
                </div>
                <div className=' border-gray-300 w-full  rounded-lg h-24 flex flex-wrap gap-y-0 p-3 '>
                        <div className='w-1/4 h-4/5 border-2 p-4 '>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                  
                 </div>


                 <div className='ml-3'>
                    <div className='flex '>
                        <h1 className='text-xl'>fual</h1>
                    </div>
                </div>
                <div className=' border-gray-300 w-full  rounded-lg h-24 flex flex-wrap gap-y-0 p-3 '>
                        <div className='w-1/4 h-4/5 border-2 p-4 '>

                        </div>
                        <div className='w-1/4 h-4/5 border-2 '>

                        </div>
                 
                      
                 </div>
                  
                </div>

  </div>
  <div className=' w-screen h-20 items-center text-white shadow-3xl border-2 text-center '>
    <button className='items-center bg-green-600 w-383 m-3 h-12 rounded-sm text-2xl font-semibold'>Find</button>

  </div>
</div>
  )
}

export default FilterModal
