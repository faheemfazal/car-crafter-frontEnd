import { axiosAdmin, axiosuser } from "axiosLink/axios"


export const getLocations = async(token)=>{
    try{
        const response = await axiosAdmin.get('/findLocation',{headers:{'Authorization':`Bearer ${token}`}})
        console.log(response);
        return response.data
    }catch{

    }

}

export const createLocation = async(token,state,city)=>{
    try{
        console.log(state,token,city);
        const response = await axiosAdmin({
            url:'/postlocation',
            method:"POST",
            data:{
                state:state,
                city:city
            },
            headers:{'Authorization':`Bearer ${token}`}
        })    
        console.log(response,"eeeeeeeeee");

        return response
    }catch{

    }
}

export const deleteLocation = async (token,deleteId)=>{
    const response = await axiosAdmin({
        url:`/locationDelete?id=${deleteId}`,
        headers:{'Authorization':`Bearer ${token}`},
        method:'POST',

    })
    console.log(response);
    return response
}

export const getLandingLocations = async () =>{
    try{
        const response = await axiosuser.get('/landinglocation')
        console.log(response);
        return response.data.city
    }catch(e){
        console.log(e);
    }
}