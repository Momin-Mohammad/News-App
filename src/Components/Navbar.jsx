import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUserAction } from "../Redux/User/user.actions";
export default function Navbar(){
    const user = JSON.parse(localStorage.getItem("userLoggedIn"));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutUser = ()=>{
        localStorage.removeItem("userLoggedIn")
        dispatch(removeUserAction);
        navigate("/login");
    }

    return(
        <div className={styles.Navbar_mainDiv}>
            <Link style={{textDecoration:"none"}} to="/" ><h3>Dashboard</h3></Link>
            <Link style={{textDecoration:"none"}} to="/signup" ><h3>Signup</h3></Link>
            <Link style={{textDecoration:"none"}} to="/login" ><h3>Login</h3></Link>
            <Link style={{textDecoration:"none"}} to="/favourites" ><h3>Favourites</h3></Link>
            {
               user?
               <div className={styles.Navbar_userDiv}>
                <h4>{user.name}</h4>
                <button onClick={logoutUser}>Logout</button>
                </div>
               : null
            }
        </div>
    )
}