import React from 'react';
import MenuItem from '../MeniItem/MenuItem';
import styles from './MenuList.module.css'


const MenuList = ({setVisible}) => {

    const menuItems = [
        {id: 1, value: 'Главная', to: '/mainpage'},
        {id: 2, value: 'Корзина', to: '/shopingcart'},
        {id: 3, value: 'О нас', to: '/about'},
        {id: 4, value: 'Корзина', to: '/shopingcart'},
        {id: 5, value: 'Корзина', to: '/shopingcart'},
    ]

    return (
        <div className={styles.main}>
            {menuItems.map(e => 
                    <MenuItem menuItems={e} key={e.id} setVisible={setVisible}/>
                )}
        </div>
    );
};



export default MenuList;