// import axios from "axios";
// import { LOGIN_SUCCESS, LOGIN_REQUEST, LOGIN_FAILURE } from "./actionTypes";

// export const setLogin = (payload) => {
//   return (dispatch) => {
//     dispatch(login_request());
//     axios
//       .post(`https://reqres.in/api/login`, payload)
//       .then((res) => {
//         dispatch(login_success(res.data.token));
//       })
//       .catch(() => {
//         dispatch(login_failure());
//       });
//   };
// };

// const login_request = () => {
//   return {
//     type: LOGIN_REQUEST,
//   };
// };
// const login_success = (bool) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: bool,
//   };
// };
// const login_failure = () => {
//   return {
//     type: LOGIN_FAILURE,
//   };
// };
