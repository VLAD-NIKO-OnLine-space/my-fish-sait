import React, { useEffect, useState } from 'react';
import styles from './ShopItem.module.css';
import ShopCounter from '../store/ShopCounter';
import { observer } from 'mobx-react-lite';
import DelButton from '../../UI/DelButton/DelButton';
import Counter from '../Counter/Counter';

const ShopItem = observer(({item}) => {

    const [count, setCount] = useState(1)

    const handleclick = () => {
        ShopCounter.removeItemShop(item.id)
        ShopCounter.del(item.id)
        ShopCounter.decrement()
    }

    useEffect(()=>{
        let test = {id: item.id, price: item.price * count}
        ShopCounter.update(test.id, test.price)
    },[count])


    return (
        <div className={styles.main}>
            <h4 className={styles.title}>{item.title}</h4>
            <span className={styles.span}></span>
            <h4 className={styles.price}>{item.price} ₽/шт</h4>
            <span className={styles.span}></span>
            <Counter count={count} setCount={setCount}/>
            <span className={styles.span}></span>
            <h4 className={styles.sum}>{count * item.price} ₽</h4>
            <DelButton onClick={handleclick}>Удалить</DelButton>
        </div>
    );
});

export default ShopItem;