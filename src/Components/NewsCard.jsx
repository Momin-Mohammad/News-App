import { useNavigate } from "react-router-dom";
import styles from "./NewsCard.module.css";
import {AiFillHeart} from "react-icons/ai"
export default function NewsCard({ele}){
    const navigate = useNavigate();

    const addToFavourites=()=>{
        
    }
    return(
        <>
        <p onClick={addToFavourites} className={styles.NewsCard_likeIcon}><AiFillHeart /></p>
        <div onClick={()=> navigate(`./news/${ele.title}`)} className={styles.NewsCardDiv}>
            
            <img src={ele.urlToImage} />
            <h3>{ele.title}</h3>
            <p>{ele.description}</p>
        </div>
        </>
    )
}