import { GET_POST_USER_DATA } from "./actionType";

const initialState = {
  loggedUser:[]
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_USER_DATA:
      return {
        loggedUser: payload,
      };

    default:
      return state;
  }
};

export { reducer };
