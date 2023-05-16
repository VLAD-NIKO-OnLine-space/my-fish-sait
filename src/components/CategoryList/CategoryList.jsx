import React, { useState } from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';
import styles from './CategoryList.module.css'

const CategoryList = () => {

    const [item, setItem] = useState([
        {id: 1, title: 'Креветки', img: './category/6.png'},
        {id: 2, title: 'Сомики', img: './category/4.png'},
        {id: 3, title: 'Вьюновые', img: './category/8.png'},
        {id: 4, title: 'Рыбки', img: './category/5.png'},
        {id: 5, title: 'Карповые', img: './category/fish.png'},
        {id: 6, title: 'Лабиринтовые', img: './category/2.png'},
        {id: 7, title: 'Пецилии', img: './category/7.png'},
        {id: 9, title: 'Улитки', img: './category/9.png'},
        {id: 10, title: 'Экзотика', img: './category/3.png'},
    ])

    return (
        <div className={styles.container}>
            {item.map(e => <CategoryItem item={e} key={e.id}/>)}
        </div>
    );
};



export default CategoryList;