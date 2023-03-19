import axios from "axios";
import { GET_POST_DATA } from "./actionType";

// let getData = () => {
//   return (dispatch) => {
//     axios.get(`http://localhost:8080/posts`).then((res) => {
//       return dispatch(redData(res.data));
//     });
//   };
// };

let getData = ()=>{
    return (dispatch)=>{
       axios.get(`http://localhost:8080/userposts`)
       .then((res)=>{
        return dispatch(redData(res.data))
       })
    }
}

let redData = (data)=>{
  return{
      type:GET_POST_DATA,
      payload:data
  }
}

let postData = (data)=>{
    return (dispatch)=>{
        axios.post(`http://localhost:8080/userposts`,{
            data
        })
        .then((res)=>{
            return dispatch(getData())
        })
    }
}

export { getData, redData, postData };
