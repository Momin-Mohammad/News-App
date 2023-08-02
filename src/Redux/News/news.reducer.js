import { newsRej, newsReq, newsSucc } from "./news.types";

const initialState = {
    news : [],
    isLoading : false,
    isError : false
}

export const newsReducer = (state=initialState,action)=>{
    switch(action.type){

        case newsReq :{
            return{
                ...state,
                isError:false,
                isLoading:true
            }
        }

        case newsSucc :{
            return{
                ...state,
                isError : false,
                isLoading: false,
                news:action.payload
            }
        }

        case newsRej :{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        default : return state;
    }
}