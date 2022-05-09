import axios from 'axios'
import { settings } from '../config';


export const signin=async (username,password)=>{
    const url=settings.server+'/user/signin'
    let result
    try{
     result=await axios.post(url,{username,password})
     result=result.data
     console.log(result)
    }
    catch(ex){console.log(ex)}
    
    return result
}
export const signup=async (username,email,password)=>{
    const url=settings.server+'/user/signup'
    let result
    try{
     result=await axios.post(url,{username,password}) 
     result=result.data
     console.log(result)
    }
    catch(ex){console.log(ex)}
    
    return result
}