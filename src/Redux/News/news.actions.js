import axios from "axios";
import { newsAPI } from "../../utils";
import { newsRej, newsReq, newsSucc } from "./news.types";

export const getNewsAction = ()=>(dispatch)=>{
    dispatch({type:newsReq});
    axios.get(newsAPI)
    .then(res=>
        dispatch({type:newsSucc,payload:res.data.articles})
        ).catch(err=>dispatch({type:newsRej}))
}