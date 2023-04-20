import axios from "axios"
import { GET_LOGGED_OUT_DATA } from "./actionType"

let getData3 = () => {
    return (dispatch) => { axios.get(`${process.env.REACT_APP_API_KEY}/loggedOutData`).then((res) => {
            return dispatch(redData(res.data));
          })
    };
  };
  


let redData = (data)=>{
    return{
        type:GET_LOGGED_OUT_DATA,
        payload:data
    }
}


export {getData3 , redData }