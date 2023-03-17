import axios from "axios"
import { GET_PEOPLE_DATA } from "./actionType"
import { GET_FEED_DATA,GET_CHANGE_DATA } from "./actionType"


let getData = (i) => {
    return (dispatch) => {
      i === 0
        ? axios.get(`http://localhost:8080/peopleData`).then((res) => {
            return dispatch(redData(res.data));
          })
        : axios.get(`http://localhost:8080/feedData`).then((res) => {
            return dispatch(blueData(res.data));
          });
    };
  };
  


let redData = (data)=>{
    return{
        type:GET_PEOPLE_DATA,
        payload:data
    }
}

let blueData = (data)=>{
    return{
        type:GET_FEED_DATA,
        payload:data
    }
}



export {getData , redData ,blueData}