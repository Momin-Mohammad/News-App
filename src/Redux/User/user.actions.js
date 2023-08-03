import { useNavigate } from "react-router-dom";
import { url } from "../../utils";
import { addToFav, getAllUser, getAllUsersFailure, getUserLoggedIn, loginSucc, removeUser } from "./user.types";
import axios from "axios";

export const getAllUsersAction = ()=>(dispatch)=>{
    axios.get(url)
   .then(res=>
    dispatch({type:getAllUser,payload:res.data}))
   .catch(err=>dispatch({type:getAllUsersFailure,payload:err}))
}

export const signupAction = (userData)=>()=>{
    axios.post(`${url}`,userData)
    .then(res=>{
            alert("User Registered successfully")
            getAllUsersAction();
       
    }).catch(err=>console.log(err))
}

export const loginAction = (user)=>(dispatch)=>{
    localStorage.setItem("userLoggedIn",JSON.stringify(user));
    dispatch({type:loginSucc,payload:user});
}

export const removeUserAction = ()=>(dispatch)=>{
    dispatch({type:removeUser});
}
