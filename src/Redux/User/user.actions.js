import { url } from "../../utils";
import { addToFav, getAllUser, getAllUsersFailure, getUserLoggedIn, loginSucc, removeUser } from "./user.types";
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
    localStorage.setItem("userLoggedIn",JSON.stringify(user));
    dispatch({type:loginSucc,payload:user});
    window.location.assign("/");
}

export const removeUserAction = ()=>(dispatch)=>{
    dispatch({type:removeUser});
}
