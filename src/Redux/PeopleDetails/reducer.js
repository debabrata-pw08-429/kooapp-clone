import { GET_PEOPLE_DATA } from "./actionType";

const initialState = {
    peopleData:[]
}

const reducer = (state = initialState , {type , payload}) =>{
    switch(type){

        case GET_PEOPLE_DATA:
            return{
                ...state , peopleData:payload
            }

        default:
            return state;
    }
}

export {reducer};