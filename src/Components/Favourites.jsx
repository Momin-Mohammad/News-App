import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "../utils";
import styles from "../Pages/Dashboard.module.css";
import NewsCard from "./NewsCard";

export default function Favourites(){
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    const [fav,setFav] = useState([]);

    useEffect(()=>{
        axios.get(`${url}/${userLoggedIn.id}`)
        .then(res=>setFav(res.data.favouriteNews))
        .catch(err=>console.log(err));
    },[])


    return(
        <div className={styles.Dashbord_NewsDiv}>
            {
                fav.length?
                fav?.map((ele,index)=>
                <div key={index}>
                    <NewsCard ele={ele} />
                </div>)
                :
                <h1>Add some news to favourites</h1>
            }
        </div>
    )
}