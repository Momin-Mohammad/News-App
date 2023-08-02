import { useEffect, useId } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getNewsAction } from "../Redux/News/news.actions";
import NewsCard from "../Components/NewsCard";
import styles from "./Dashboard.module.css";

export default function Dashbord(){
    const {news,isLoading,isError} = useSelector(store=>store.newsReducer);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getNewsAction());
    },[])
    
    return(
        <div className={styles.Dashbord_mainDiv}>
            <h1>News</h1>
            <div className={styles.Dashbord_NewsDiv}>
                {
                    isLoading?
                    <h2 style={{color:"whitesmoke",textAlign:"center"}}>Loading...</h2>
                    :
                    news?
                    news?.map((ele,index)=>
                    <div key={index}>
                        <NewsCard ele={ele} />
                    </div>)
                    :
                    <h2 style={{color:"whitesmoke",textAlign:"center"}}>Error Loading News</h2>
                }
            </div>
        </div>
    )
}