
import { reducer as PeopleReducer} from "./PeopleDetails/reducer";
import {applyMiddleware, legacy_createStore,combineReducers } from "redux"
import thunk from "redux-thunk"

const rootReducer=combineReducers({
    PeopleReducer,
});
const store = legacy_createStore(rootReducer ,  applyMiddleware(thunk))

export {store};
