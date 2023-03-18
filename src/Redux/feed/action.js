import axios from "axios";
import {
  GET_prod_DATA_SUCCESS,
  GET_prod_DATA_REQUEST,
  GET_prod_DATA_FAILURE,
} from "./actionType";

const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`;

export const getprod = () => {
  return (dispatch) => {
    dispatch(get_prod_data_request());
    axios
      .get(url)
      .then((res) => {
        dispatch(get_prod_data_success(res.data));
      })
      .catch(() => {
        dispatch(get_prod_data_failure());
      });
  };
};

const get_prod_data_request = () => {
  return {
    type: GET_prod_DATA_REQUEST,
  };
};
const get_prod_data_success = (data) => {
  return {
    type: GET_prod_DATA_SUCCESS,
    payload: data,
  };
};
const get_prod_data_failure = () => {
  return {
    type: GET_prod_DATA_FAILURE,
  };
};
