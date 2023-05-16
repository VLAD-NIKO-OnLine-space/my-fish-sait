import React, { useState } from 'react';
import styles from './Card.module.css';
import ShopCounter from '../store/ShopCounter';
import { observer } from 'mobx-react-lite';
import AddButton from '../../UI/AddButtton/AddButton';
import { useNavigate } from 'react-router-dom';


const Card = observer(({info}) => {

    const [style, setStyle] = useState([styles.h1])
    const router = useNavigate()

    const shopClick = () => {
        ShopCounter.increment()
        const newShopItem = {title: info.title, price: info.price, id: Date.now()}
        ShopCounter.addItemShop(newShopItem)
        setStyle([styles.add])
        ShopCounter.add(newShopItem)
    }

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer} onClick={()=> router(`/fishinfo/${info.title}`, {state: {info}})}>
                <img src={info.img} alt="" className={styles.img}/>
            </div>
            <h1 className={styles.title}>{info.title}</h1>
            <p className={styles.price}>{info.price} ₽</p>
            <div className={styles.shopContainer}>
                <AddButton onClick={shopClick}>В корзину</AddButton>
                <h1 className={style}>Добавлено</h1>
            </div>     
        </div>
    );
});



export default Card;