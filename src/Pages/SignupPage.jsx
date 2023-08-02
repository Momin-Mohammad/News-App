import { useEffect, useState } from "react";
import styles from "./SignupPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction, signupAction } from "../Redux/User/user.actions";

export default function SignupPage(){
    const allUsers = useSelector(store=>store.userReducer.users);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()

    const signupUser = (e)=>{
        e.preventDefault();
        let userData = {
            name : name,
            email : email,
            password : password,
            favouriteNews:[]
        }

        if(allUsers.length){
            let findUser = allUsers?.filter((ele)=> ele.email === email);
            if(findUser.length > 0){
                alert("User already exists. Please Log in");
                window.location.assign("/login")
            }else{
                dispatch(signupAction(userData)); 
            }
        }else{
        dispatch(signupAction(userData));
        }
    }

    useEffect(()=>{
        dispatch(getAllUsersAction());
    },[])

    return(
        <div className={styles.SignupPage_mainDiv}>
            <form onSubmit={signupUser}>
            <h1>Sign up</h1>
                <input required onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name" />
                <input required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                <input required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                <input type="submit" value="Sign up" />
            </form>
        </div>
    )
}