import React from 'react'
import AdminSidebar from 'components/AdminSidebar'
import AdminNavbar from 'components/AdminNavbar'


function SeeLocation() {
  return (
    <>
    <AdminNavbar />
    <div className='flex'>
         <AdminSidebar />
          <div className='overflow-auto rounded-lg shadow hidden sm:block'>
        <table className='w-full'>
            <thead className='bg-gray-50 border-b-2 border-gray-200'>
                <tr className=''>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>NO.</th>

                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Staus</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>Data</th>
                    <th className='p-3 text-sm font-semibold tracking-wide text-left'>car nummber</th>

                </tr>

            </thead>
            <tbody>
            {/* { hostData.map((data,index)=>
                ( */}
                <tr >
                
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >dfsdf</td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' ><button className='font-bold text-blue-500 hover:underline' >view and approve</button></td>
                    {/* <ViewApprove open={isOpen} setOpen={setIsOpen} carData={hostData[count]}  token={token} /> */}
                    {/* <td className='p-3 text-sm text-gray-700 whitespace-nowrap' ><span className={`p-1.5 text-xs font-medium uppercase tracking-wider
                    //  ${hostData[0]?.status === 'pending' && 'text-yellow-800 bg-yellow-200' } ${hostData[0]?.status === 'Denial' && 'text-red-800 bg-red-200' } ${hostData[0]?.status === 'Approved' && 'text-green-800 bg-green-200' } rounded-lg bg-opacity-50`}>{data.status}</span></td> */}
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >dffdfdf</td>
                    <td className='p-3 text-sm text-gray-700 whitespace-nowrap' >fdsfsdf</td>
    
                </tr>
                {/* )
            ) }
               */}
            </tbody>

        </table>
        </div>
    </div>
    </>
  )
}

export default SeeLocation
