import { newsRej, newsSucc } from "./news.types";

const initialState = {
    news : [],
    isError : false
}

export const newsReducer = (state=initialState,action)=>{
    switch(action.type){

        case newsSucc :{
            console.log("news:",action.payload)
            return{
                ...state,
                isError : false,
                news:action.payload
            }
        }

        case newsRej :{
            return{
                ...state,
                isError:true
            }
        }

        default : return state;
    }
}