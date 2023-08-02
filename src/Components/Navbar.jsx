import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAction } from "../Redux/User/user.actions";
export default function Navbar(){
    const user = localStorage.getItem("userLoggedIn");
    const dispatch = useDispatch();
    
    const logoutUser = ()=>{
        localStorage.removeItem("userLoggedIn")
        dispatch(removeUserAction);
        window.location.assign("/login");
    }

    return(
        <div className={styles.Navbar_mainDiv}>
            <Link style={{textDecoration:"none"}} to="/" ><h3>Dashboard</h3></Link>
            <Link style={{textDecoration:"none"}} to="/signup" ><h3>Signup</h3></Link>
            <Link style={{textDecoration:"none"}} to="/login" ><h3>Login</h3></Link>
            {
               user?
               <div className={styles.Navbar_userDiv}>
                <h4>{user}</h4>
                <button onClick={logoutUser}>Logout</button>
                </div>
               : null
            }
        </div>
    )
}