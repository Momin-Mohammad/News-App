import { useEffect, useState } from "react";
import styles from "./SignupPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction, loginAction } from "../Redux/User/user.actions";

export default function LoginPage(){
    const allUsers = useSelector(store=> store.userReducer.users);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()

    const loginUser = (e)=>{
        e.preventDefault(); 

        let findUser = allUsers?.filter((ele)=>ele.email === email);
        if(findUser.length){
            if(findUser[0]?.password === password){
                localStorage.setItem("userLoggedIn",findUser[0]?.name)
                dispatch(loginAction(findUser[0]?.name));
            }else{
                alert("Wrong Password");
                setPassword("");
            }
        }else{
            alert("User not found. Please sign up");
            window.location.assign("/signup")
        }
        
    }

    useEffect(()=>{
        dispatch(getAllUsersAction());
    },[])

    return(
        <div className={styles.SignupPage_mainDiv}>
            <form onSubmit={loginUser}>
                <h2>Login</h2>
                <input required onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter Email" />
                <input required onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}