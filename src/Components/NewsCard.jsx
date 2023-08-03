import { useNavigate } from "react-router-dom";
import styles from "./NewsCard.module.css";
import {AiFillHeart} from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../utils";
export default function NewsCard({ele}){
    const navigate = useNavigate();
    const userLoggedIn = JSON.parse(localStorage.getItem("userLoggedIn"));
    const page = window.location.href;

    const addToFavourites=async()=>{
        let favNews = [];
        try{
       await axios.get(`${url}/${userLoggedIn.id}`)
        .then(res=>{favNews=res.data.favouriteNews}).catch(err=>console.log(err))
        }catch(err){
            console.log(err)
        }
    
        let data ={
            favouriteNews : [...favNews,ele]
        }
    axios.patch(`${url}/${userLoggedIn.id}`,data)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err));
    alert("Added to Favourites")
    }

    return(
        <>{
            page.includes("favourites")?null
            :
            <p onClick={addToFavourites} className={styles.NewsCard_likeIcon}><AiFillHeart /></p>
        }
        
        <div onClick={()=> navigate(`/news/${ele.title}`)} className={styles.NewsCardDiv}>
            
            <img src={ele.image} />
            <h3>{ele.title}</h3>
            <p>{ele.description}</p>
        </div>
        </>
    )
}