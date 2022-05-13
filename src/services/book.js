import axios from "axios"
import { settings } from "../config"

export const getBooks = async () => {
    const url = settings.server + '/book/'
    const token = sessionStorage['token']
    let response
    try {
        response =await axios.get(url,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        response = response.data
    } catch (ex) {
        console.log(ex)
    }
    return response
}
export const deleteBook = async(id) => {
    const url = settings.server + `/book/${id}`
    const token = sessionStorage['token']
    let response
    try {
        response = await axios.delete(url,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        response = response.data
    } catch (ex) {
        console.log(ex)
    }
    return response
}

export const createBook=async (title,author,description,quantity)=>{
    const url=settings.server+`/book/`
    const token=sessionStorage['token']
    let response
    try{
        response=await axios.post(url,{
            title,
            author,
            description,
            quantity
        },{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        })
        response=response.data

    }catch(ex){
        console.log(ex)
    }
    return response
}