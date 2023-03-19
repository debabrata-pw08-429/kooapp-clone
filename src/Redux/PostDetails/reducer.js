import { GET_POST_DATA } from "./actionType";

const initialState = {
  description: "",
  files: [],
  likes: 0,
  comments: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        description: payload.description,
        files: [...payload.files],
      };

    default:
      return state;
  }
};

export { reducer };
