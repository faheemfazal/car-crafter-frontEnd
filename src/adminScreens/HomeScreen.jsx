import React, { useEffect, useState } from 'react'
import AdminNavbar from 'components/AdminNavbar'
import AdminSidebar from 'components/AdminSidebar'
import { getdashBord } from 'Api/dashBord';

import { BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { paymentComplete } from 'Api/paymentForOrder';


function HomeScreen() {

  const [barData, setBarData] = useState([])
  const [pieData, setPieData] = useState([]);
  const [arrayorder,setArrayorder] = useState()
  const [monthReport,setmonthreport] = useState([])
  const [data,setData] = useState(null)
  const [pending,setPending] = useState('')
  const [complete,setcomplele] = useState('')

  const [cancel,setCancell] = useState('')

  const [PaymentComplete,setPaymentComplete] = useState('')

  const now = new Date();
  const currentMonth = now.getMonth();
  const months = [];

  // Add two months before the current month
  for (let i = 2; i >= 1; i--) {
    const month = new Date(now);
    month.setMonth(currentMonth - i);
    months.push(month.toLocaleString('default', { month: 'long' }));
  }

  // Add the current month
  months.push(now.toLocaleString('default', { month: 'long' }));

  // Add two months after the current month
  for (let i = 1; i <= 2; i++) {
    const month = new Date(now);
    month.setMonth(currentMonth + i);
    months.push(month.toLocaleString('default', { month: 'long' }));
  }


  console.log(months,';;;;;;;;;;;;;;;,');


  
  useEffect(()=>{
    if(!data){
      console.log('....');
      getdashBord().then((res)=>{
       console.log(res);
       if(res.status === 200){
           
         setPieData(res.data.data)
         setPending(res.data.data[0])
         setcomplele(res.data.data[1])
         setCancell(res.data.data[2])
         setPaymentComplete(res.data.data[3])
         setData(true)
         setmonthreport(res.data.result)

       }
      })
    }

  },[])
  let newPieData=[]
  console.log(pieData,);
  console.log(pending,'llllllll');
 
  useEffect(() => {
    // Generate random data for the bar graph

    if(data){
      console.log(pieData,'/////////////////?');
    
      const newBarData = [];
      for (let i = 0; i < 5; i++) {
        newBarData.push({
          name: `Bar ${i}`,
          value: monthReport[i]?.profit_count
        });
      }
      setBarData(newBarData);
  
      // Generate random data for the pie chart
      const newPieData = [];
      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];
      for (let i = 0; i <pieData.length; i++) {
        console.log();
        newPieData.push({
          name: `Pie ${i}`,
          value: pieData[i],
          color: colors[i]
          
        });
      }
      setPieData(newPieData);
    }else{
      
    }
    return () => {
      setData(null)
      // setData(false)

  }
  }, [data]);

  console.log(pieData,';lll;l');


  
  return (
    <div>
      <AdminNavbar />

        <div className='flex '>
          <AdminSidebar />
          <div className='w-full flex justify-center'>

        
          <div className='mx-5 '>
      <h1 className='text-semibold font-semibold text-2xl'>Monthly Report</h1>
      <div className='mt-5'>
      <BarChart width={400} height={300} data={barData}>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <div className='flex -ml-3'>
     {months.map((data)=>(
      <h1 className=' ml-10'>{data}</h1>
     ))  
}
      </div>

      </div>

      <div className='flex justify-around pt-8 '>
     
 
      <div className='justify-center '>
        <h1 className='text-3xl'>Orders </h1>
      <div className='flex pt-4'>
         <h1 className='text-red-600 text-lg'>Pending : </h1>
    
        <h1 className='text-lg pl-2'>{ pending}</h1>
  
      </div>
      <div className='flex'>
         <h1 className='text-red-600 text-lg'>cancel : </h1>
    
        <h1 className='text-lg pl-2'>{ cancel}</h1>
  
      </div>
      <div className='flex'>
         <h1 className='text-red-600 text-lg'>complete : </h1>
    
        <h1 className='text-lg pl-2'>{ complete}</h1>
  
      </div>
      <div className='flex'>
         <h1 className='text-red-600 text-lg'>payment complete : </h1>
    
        <h1 className='text-lg pl-2'>{ PaymentComplete}</h1>
  
      </div>
    </div>

        
      <PieChart width={400} height={300}>
        <Pie
          data={pieData}
          dataKey="value"
          cx={250}
          cy={150}
          innerRadius={60}
          outerRadius={100}
          animationBegin={0}
          animationDuration={1500}
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>
      </div>
    </div>
        </div>
        </div>
    </div>
  )
}

export default HomeScreen
