import { useEffect } from "react";
import { useSelector } from "react-redux"

export default function Dashbord(){
    const loggedInUser = useSelector(store=>store.userReducer.userLoggedIn);

    useEffect(()=>{

    },[])
    
    return(
        <h1>Dashboard</h1>
    )
}