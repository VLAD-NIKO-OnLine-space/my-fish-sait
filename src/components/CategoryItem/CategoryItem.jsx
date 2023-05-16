import React from 'react';
import styles from './CategoryItem.module.css'
import { useNavigate } from 'react-router-dom';


const CategoryItem = ({item}) => {
    const router = useNavigate()
  
    return (
        <div className={styles.container} onClick={()=>router(`/mainpage/${item.title}`)}>   
            <img src={item.img} alt="" className={styles.img}/>
            <h1 className={styles.title}>{item.title}</h1>
        </div>
    );
};


export default CategoryItem;