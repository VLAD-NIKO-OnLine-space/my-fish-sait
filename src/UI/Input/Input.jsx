import React from 'react';
import styles from './Input.module.css'

const Input = ({...props}) => {
    return (
        <div className={styles.cont}>
            <input className={styles.input} {...props}/>
            <img src="/search.svg" alt="" className={styles.img}/>
        </div>
    );
};



export default Input;