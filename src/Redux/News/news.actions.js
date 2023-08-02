import axios from "axios";
import { postRej, postSucc } from "./news.types"
import { url } from "../../utils";

export const getNewsAction = ()=>(dispatch)=>{

    axios.get(`${url}/news`)
    .then(res=>
        dispatch({type:newsSucc,payload:res.data})
        ).catch(err=>dispatch({type:newsRej}))
}