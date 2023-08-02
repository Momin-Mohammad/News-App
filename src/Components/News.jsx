import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewsAction } from "../Redux/News/news.actions";
import { useParams } from "react-router-dom";
import styles from "./News.module.css";

export default function News(){
    const {news,isLoading} = useSelector(store=>store.newsReducer);
    const dispatch = useDispatch();
    const {title} = useParams();

    useEffect(()=>{
        dispatch(getNewsAction());
    },[])

    let filterNews = news?.filter((ele)=>ele.title === title);
    return(
        <div className={styles.News_mainDiv}>
            {
                isLoading?
                <h2 style={{color:"whitesmoke",textAlign:"center"}}>Loading...</h2>
                :
                filterNews?.map((ele)=>
                <div className={styles.News_NewsDiv}>
                    <div>
                    <img src={ele.urlToImage} alt="news image" />
                    </div>
                    <h1>{ele.title}</h1>
                    <p>{ele.description}</p>
                    <p>{ele.content}</p>
                    <a href={ele.url} target="_blank">View full news</a>
                </div>
                )
            }
            
        </div>
    )
}