import axios from "axios";
import { GET_POST_USER_DATA } from "./actionType";

let getData2 = () => {
  return (dispatch) => {
    axios.get(`${process.env.REACT_APP_API_KEY}/loggedUser`).then((res) => {
      return dispatch(redData(res.data));
    });
  };
};

let redData = (data) => {
  return {
    type: GET_POST_USER_DATA,
    payload: data,
  };
};

export { getData2, redData };
