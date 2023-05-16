import React from 'react';
import styles from './ShopIcon.module.css'
import ShopCounter from '../components/store/ShopCounter';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router';


const ShopIcon = observer(() => {
    const router = useNavigate()
    return (
        <div className={styles.cont}>
            <img 
                src="/shopIcon.svg" 
                alt="shop-icon" 
                className={styles.icon} 
                onClick={()=>router('/shopingcart')} 
            />
            <p className={styles.count}>{ShopCounter.count}</p>
        </div>
        
    );
});


export default ShopIcon;