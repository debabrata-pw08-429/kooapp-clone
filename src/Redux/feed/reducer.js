import {
  GET_prod_DATA_SUCCESS,
  GET_prod_DATA_REQUEST,
  GET_prod_DATA_FAILURE,
} from "./actionType";

const initialState = {
  prod: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_prod_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_prod_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        prod: payload,
      };

    case GET_prod_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
