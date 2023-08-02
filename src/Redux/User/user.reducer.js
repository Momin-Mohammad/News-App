import { getAllUser, getAllUsersFailure, getAllUsersReq, getUserLoggedIn, loginSucc, removeUser } from "./user.types";

const initState = {
    users : [],
    userLoggedIn : null,
    isError : false
}

export const userReducer = (state=initState,action)=>{
    switch(action.type){

        case getAllUser : {
            return{
                ...state,
                isError:false,
                users : action.payload
            }
        }

        case getAllUsersFailure : {
            alert("Please check if server is running" )
            return{
                ...state,
                isError : true
            }
        }

        case loginSucc : {
            alert("Login Successful")
            return{
                ...state,
                isError : false,
                userLoggedIn : action.payload
            }
        }

        case removeUser : {
            return{
                ...state,
                isError : false,
                userLoggedIn : null
            }
        }

        default : return state;
    }
}