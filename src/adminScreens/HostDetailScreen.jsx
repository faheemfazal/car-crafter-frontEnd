import React, { useEffect, useState } from 'react'
import AdminSidebar from 'components/AdminSidebar'
import { getHosttData,getapproveAndDenile } from 'Api/hostVerify'
import { useSelector } from 'react-redux'
import ViewApprove from './modal/ViewApprove'
import AdminNavbar from 'components/AdminNavbar'
import moment from 'moment'






 function HostDetailScreen() {
    const {token} =useSelector((state)=>state.adminSlice)
    const [hostData,setHostDAta] = useState([])
    const [isOpen,setIsOpen] = useState(false)
    const [count,setcount] = useState()


  
    const approveAndDenile =async(e)=>{
        const newStatus = e.target.value
        const res = await getapproveAndDenile(token,newStatus)
        setHostDAta(res)

    }
    useEffect(()=>{
        if(!isOpen){
            getHosttData(token).then((res)=>{
                setHostDAta(res)
            })
        }
        
    },[isOpen])
  return ( 
    <>
    <AdminNavbar />
    <div className='flex'>

  
     <AdminSidebar />
    <div className=' p-10 h-full w-full items-center'>
        <h1 className='text-xl mb-2'>Host Details</h1>
        <div className='flex'>
            <button className={`${hostData[0]?.status === 'pending' && 'border-b-4 border-yellow-600'} border-b-4 pl-3 pr-3 text-lg `} value={'pending'} onClick={approveAndDenile}>Pending</button>
            <button className={`${hostData[0]?.status === 'Approved' && 'border-b-4 border-green-700'} border-b-4 pl-3 pr-3 text-lg `}value={'Approved'} onClick={approveAndDenile}>Approve</button>
            <button className={`${hostData[0]?.status === 'Denial' && 'border-b-4 border-red-600'} border-b-4 pl-3 pr-3 text-lg `} value={'Denial'} onClick={approveAndDenile}>Denial</button>

        </div>
        <div className='overflow-auto rounded-lg shadow hidden sm:block'>
        <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200 w-full'>
                <tr className=''>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>NO.</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Details</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Staus</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Data</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Amount</th>

                </tr>

            </thead>
            <tbody>
            { hostData.map((data,index)=>
                (<tr >
                
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{index+1}</td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' ><button className='font-bold text-blue-500 hover:underline' onClick={()=> {setcount(index); setIsOpen(true)}} >view and approve</button></td>
                    <ViewApprove open={isOpen} setOpen={setIsOpen} carData={hostData[count]}  token={token} />
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' ><span className={`p-1.5 text-xs font-medium uppercase tracking-wider
                     ${hostData[0]?.status === 'pending' && 'text-yellow-800 bg-yellow-200' } ${hostData[0]?.status === 'Denial' && 'text-red-800 bg-red-200' } ${hostData[0]?.status === 'Approved' && 'text-green-800 bg-green-200' } rounded-lg bg-opacity-50`}>{data.status}</span></td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{moment(data.createdAt).format('DD,MM,YYYY , h : mm A')}</td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >{data.carNumber}</td>
    
                </tr>)
            ) }
              
            </tbody>

        </table>
        </div>
        { hostData.map((data,index)=>
                (
        <div className='sm:hidden grid w-96 gap-14 '>
             
                <div className=' bg-white p-4 rounded-lg shadow'>
                <div className='  items-center space-x-2 text-sm'>
            <div>NO. : {index+1}</div>
            <div className='mt-2'><button className=' text-blue-500 font-bold hover:underline 'onClick={()=> {setcount(index); setIsOpen(true)}}>view</button></div>
            <ViewApprove open={isOpen} setOpen={setIsOpen} carData={hostData[count]}  token={token} />

            <div className='mt-2'><span className={` ${hostData[0]?.status === 'pending' && 'text-yellow-800 bg-yellow-200' } ${hostData[0]?.status === 'Denial' && 'text-red-800 bg-red-200' } ${hostData[0]?.status === 'Approved' && 'text-green-800 bg-green-200' }p text-xs font-medium uppercase tracking-wider  text-green-800 bg-green-200 rounded-lg bg-opacity-50 `}>approved</span></div>
            <div className='text-gray-500 pt-3'>Date : {moment(data.createdAt).format('DD,MM,YYYY , h : mm A')}</div>
            <div className='text-gray-700 pt-3 '>Car number :{data.carNumber}</div>

                </div>
            </div>
        </div>)
            ) }
    </div>
    </div>
    </>
  )
}

export default HostDetailScreen
