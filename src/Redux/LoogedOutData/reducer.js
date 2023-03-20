import { GET_LOGGED_OUT_DATA } from "./actionType";


const initialState = {
    loggedOutData:[]
}



const reducer = (state = initialState , {type , payload}) =>{
    
    console.log(payload,"payload at logged out data reducer")
    switch(type){

        case GET_LOGGED_OUT_DATA:
            return{
                ...state , loggedOutData:payload
            }
        default:
            return state;
    }
}

export {reducer};