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