import React from 'react';
import styles from './PresentItem.module.css'

const PresentItem = ({title}) => {
    return (

        <h1 className={styles.h1}>{title}</h1>
    );
};



export default PresentItem;