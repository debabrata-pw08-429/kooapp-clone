import axios from "axios"
import { GET_PEOPLE_DATA } from "./actionType"

let getData = ()=>{
    return (dispatch)=>{
       axios.get(`http://localhost:8080/peopleData`)
       .then((res)=>{
        return dispatch(redData(res.data))
       })
    }
}


let redData = (data)=>{
    return{
        type:GET_PEOPLE_DATA,
        payload:data
    }
}

export {getData , redData }