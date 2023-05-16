import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import Button from '../../UI/Button/Button';
import styles from './FishInfoPage.module.css';
import AddButton from '../../UI/AddButtton/AddButton';
import ShopCounter from '../../components/store/ShopCounter';



const FishInfoPage = () => {

    let navigate = useNavigate()
    const {state} = useLocation()
    const item = state.info


    const shopClick = () => {
        ShopCounter.increment()
        const newShopItem = {title: item.title, price: item.price, id: Date.now()}
        ShopCounter.addItemShop(newShopItem)
        ShopCounter.add(newShopItem)
    }

    return (
        <motion.div
            className={styles.main}
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 1, transition: {duration: 0.05}}}
        >
            <img src='/foncard.jpg' alt="" className={styles.fon}/>
            <h1 className={styles.name}>{item.title}</h1>
            <Button onClick={()=>navigate(-1)}>Назад</Button>
            <div className={styles.container}>
                <img src={item.img} alt="img" className={styles.img}/>
                    <h4 className={styles.h4}>Цена: {item.price} ₽/шт</h4>
                    <AddButton onClick={shopClick}>добавить</AddButton>
                    <h1 className={styles.h1}>Описание</h1>
                    <p className={styles.par}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         Accusantium iure delectus soluta repellat. Earum, eligendi!
                          Quo ea numquam officia inventore optio assumenda aliquid 
                          magnam a explicabo, repudiandae, quisquam quos quia cum 
                          possimus esse corrupti laborum velit praesentium dolor maxime adipisci!
                         Obcaecati voluptatum quis nam quod optio. Doloribus, quidem. Nisi, quibusdam?
                    </p>
                    <h1 className={styles.h1}>Параметры содержания</h1>
                    <p className={styles.par}>Т летом 18-24, зимой 14-18; dH 8-25, рН 6-8.</p>
            </div>
        </motion.div>
    );
};



export default FishInfoPage;