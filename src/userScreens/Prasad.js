import React from 'react'
import carImg from '../components/assets/4500137.jpg'
import { Card, Button } from 'antd';
import { CameraOutlined } from '@ant-design/icons'

const { Meta } = Card;

function prasad() {
  return (
    <div >
    <div>
       
    </div>
    <div className=' flex p-10  text-center gap-5 justify-center'>
        <div
            className='w-1/5 h-full  border border-gray-200 border-spacing-2 border-2 rounded-lg gap-4 '
           
        

        >
              <img
                    alt="example"
                    src={carImg}
                    className='rounded-lg'
                />

                <div className='flex bg-gray-300 h-9'>
                <CameraOutlined  className='p-2'/>
                <h1 className='pl-2 pt-1'>Prasad p</h1>
                </div>
                <div className='flex bg-gray-100 h-9 justify-between'>
                    <div className='flex'>
                <CameraOutlined  className='p-2'/>
                <h1 className='pl-2 pt-1'>wallet amount</h1>

                    </div>
                <h1 className='pl-2 pt-1'>2000</h1>

                </div>
                <div className='flex bg-gray-100 h-9'>
                <CameraOutlined  className='p-2'/>
                <h1 className='pl-2 pt-1'>Prasad p</h1>
                </div>
                <div className='flex bg-gray-100 h-9'>
                <CameraOutlined  className='p-2'/>
                <h1 className='pl-2 pt-1'>Prasad p</h1>
                </div>
                <div className='flex bg-gray-100 h-9'>
                <CameraOutlined  className='p-2'/>
                <h1 className='pl-2 pt-1'>Prasad p</h1>
                </div>
         
            {/* <p>wallet amount : 2000</p> */}
        
        </div>

        <div className='w-7/12  flex  flex-row rounded-lg border-2  '>
            {/* <div className='w-1/5 '>
                <Card className='border-none'
                    cover={<img src={carImg} />}
                    actions={[
                        <Button icon={<CameraOutlined />} key="camera" />, // Add the camera icon as an action
                    ]}
                >
                    Other card content goes here
                </Card>
            </div> */}

            <form className='w-full p-3   flex flex-col rounded-lg shadow-md shadow-white border-none '>
                <div className='md:flex w-full'>
                    <div className='md:w-full h-full'>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>Name</h1>/} */}
                            <input
                                className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="text"
                                placeholder='Name'
                            />

                        </div>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>Email</h1>/} */}
                            <input className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="text"
                                placeholder='Email'
                            />
                        </div>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>Phone</h1>/} */}
                            <input className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="number"
                                placeholder='Phone'

                            />
                        </div>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>District</h1>/} */}
                            <input className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="text"
                                placeholder='District'
                            />
                        </div>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>Local Area</h1>/} */}
                            <input className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="text"
                                placeholder='Local Area'
                            />
                        </div>
                        <div className='w-full h-20 p-3'>
                            {/* {/<h1>Age</h1>/} */}
                            <input className={`border w-full h-2/3 rounded-lg px-3 text-black `}
                                type="number"
                                placeholder='Age'
                            />
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h1 className='text-start pl-4' >Driving licence</h1>
                </div>

                
                <div className="flex p-4 gap-4 ">
                    
                    <div className="w-1/2 p-4 border">
                    <h1 className='text-start'>front side</h1>
                        <img alt="example" src={carImg} className="w-full h-auto" />
                        {/* Other content for the first div */}
                    </div>

                    <div className="w-1/2 p-4 border">
                    <h1 className='text-start'>back side</h1>

                        <img alt="example" src={carImg} className="w-full h-auto" />
                        {/* Other content for the second div */}
                    </div>
                </div>
                <div className='pt-6 w-full flex justify-center'>
                    <button type="submit" className="text-white border bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2" >
                        Change
                    </button>

                </div>
            </form>

        </div >
    </div>
</div >
  )
}

export default prasad
