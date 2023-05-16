import React from 'react';
import styles from './ShoppingCart.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';
import Button from '../../UI/Button/Button';
import ShopList from '../../components/ShopList/ShopList';

const ShoppingCart = () => {
    let navigate = useNavigate()
    return (
        <motion.div
            className={styles.main}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.05}}}
        >
        <img src="/shopfon.jpg" alt="" className={styles.fon}/>
        <Button onClick={()=>navigate(-1)}>Назад</Button>
        <h1 className={styles.title}>Корзина</h1>
        <ShopList/>
        </motion.div>
    );
};


export default ShoppingCart;