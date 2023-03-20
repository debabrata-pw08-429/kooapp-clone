import { reducer as PeopleReducer } from "./PeopleDetails/reducer";
import { reducer as loginReducer } from "./login/reducer";
import { reducer as userPostReducer } from "./PostDetails/reducer";
import { reducer as feedReducer } from "./feed/reducer";
import { reducer as loggedReducer } from "./userDetails/reducer";
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  PeopleReducer,
  loginReducer,
  userPostReducer,
  loggedReducer,
  feedReducer,
  
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
