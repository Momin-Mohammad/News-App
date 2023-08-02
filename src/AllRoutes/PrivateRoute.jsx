import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}){
   let user = localStorage.getItem("userLoggedIn");

   if(user){
    return <>
    {children}
    </>
   }else{
    return <Navigate to="/login" />
   }
}