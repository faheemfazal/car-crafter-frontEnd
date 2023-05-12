import React, { useEffect } from 'react'
import AdminSidebar from 'components/AdminSidebar'
import AdminNavbar from 'components/AdminNavbar'
import { useState } from 'react'
import moment from 'moment'
import useSelection from 'antd/es/table/hooks/useSelection'
import { useSelector } from 'react-redux'
import { getUser } from 'Api/userData'
import { message } from 'antd'
import { blockUser,UnblockUser } from 'Api/userData'

function UserDetail() {
  const [render,setRende]  =useState(false)
  const [users,setUsers] = useState([])
  const {token} = useSelector((state)=>state.adminSlice)
  useEffect(()=>{
     getUser(token).then((res)=>{
      
      if(res.status === 201){
       
          setUsers(res.data.users)
      

      }
     })
  },[render])

  const handleBlock = async(id,access)=>{
    try{
 
      
      if(access){
        
        const res = await blockUser(token,id)
        
        if(res.status === 201){
          message.success('successfully completed').then((res)=>{
           setRende(!render)
          })
        }
      }else{
        
        const res = await UnblockUser(token,id)
        
        if(res.status === 201){
          message.success('successfully completed').then((res)=>{
           setRende(!render)
          })
        }
      }
           

    }catch{

    }
  }

  return (
    <>
    <AdminNavbar />
    <div className='flex'>
       <AdminSidebar />
       <div className='w-full'> 
       <div className='overflow-auto rounded-lg shadow hidden sm:block m-5'>
        <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr className=''>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>NO.</th>

                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>email</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>number</th>

                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Name</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Block</th>


                </tr>

            </thead>
            <tbody>
            { users.map((data,index)=>
                (
                <tr >
                
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{index+1}</td>

                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{data?.email}</td>  
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{data?.number}</td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{data?.name}</td>  
                    <button className={`p-1 m-2 text-xl ${data.access ? 'bg-red-600 hover:bg-red-800' :'bg-green-600 hover:bg-green-800'}  rounded-xl text-white `} onClick={()=>handleBlock(data._id,data.access)}>{`${ data.access ?  'block' : 'UnBlock'}`}</button>



    
                </tr>
                 )
            ) } 
            
              
            </tbody>

        </table>
        </div>
        { users.map((data,index)=>
                (
        <div className='sm:hidden grid w-96 gap-14 '>
             
                <div className=' bg-white p-4 rounded-lg shadow'>
                <div className='  items-center space-x-2 text-sm'>
            <div>NO. : {index+1}</div>

            <div className='text-gray-500 pt-3'>Email : {data.name} </div>

            <div className='text-gray-500 pt-3'>Email : {data.email} </div>
            <div className='text-gray-700 pt-3 '>Number :{data.number}</div>
            <button className='p-1 m-2 text- bg-red-600 rounded-xl text-white hover:bg-red-800'>block</button>


                </div>
            </div>
        </div>)
            ) }
        
       </div>
      
      
    </div>
    </>
  )
}

export default UserDetail
