import React from 'react';
import ShopItem from '../ShopItem/ShopItem';
import ShopCounter from '../store/ShopCounter';
import { observer } from 'mobx-react-lite';
import styles from './ShopList.module.css';
import ArrangeButton from '../../UI/ArrangeButton/ArrangeButton';


const ShopList = observer(() => {

    const shopItems = ShopCounter.itemsShop
    const total = ShopCounter.totalPrice
    
    const getTotalPrice = () => {
        let res = 0
        total.forEach(e => {
            res += e.price 
        })
        return res
    }


    if(!shopItems.length){
        return <h1 className={styles.h1}>Корзина пуста :(</h1>
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {shopItems.map(e => 
                        <ShopItem item={e} key={e.id}/>
                    )}
            </div>
            <div className={styles.pay}>
                <h3 className={styles.h3}>Итого к оплате:</h3>
                <div className={styles.arrange}>
                    <h3 className={styles.totalPrice}>{getTotalPrice()} ₽</h3>
                    <ArrangeButton>Оформить заказ</ArrangeButton>
                </div>
            </div>
        </div>
    );
});



export default ShopList;