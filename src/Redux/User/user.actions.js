import { url } from "../../utils";
import { getAllUser, getAllUsersFailure, getUserLoggedIn, loginSucc, removeUser } from "./user.types";
import axios from "axios";


export const getAllUsersAction = ()=>(dispatch)=>{
    axios.get(`${url}/users`)
   .then(res=>
    dispatch({type:getAllUser,payload:res.data}))
   .catch(err=>dispatch({type:getAllUsersFailure,payload:err}))
}

export const signupAction = (userData)=>()=>{
    axios.post(`${url}/users`,userData)
    .then(res=>{
            alert("User Registered successfully")
            getAllUsersAction();
            window.location.assign("/login")
       
    }).catch(err=>console.log(err))
}

export const loginAction = (user)=>(dispatch)=>{
    dispatch({type:loginSucc,payload:user});
}

export const removeUserAction = ()=>(dispatch)=>{
    dispatch({type:removeUser});
}
