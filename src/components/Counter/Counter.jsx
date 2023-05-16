import React from 'react';
import styles from './Counter.module.css';

const Counter = ({count, setCount}) => {

    const push = () => {
        setCount(count+1)
    }

    return (
        <div className={styles.container}>
            <button className={styles.btn} onClick={()=> count!==1 ? setCount(count - 1) : setCount(1)}>-</button>
            <p className={styles.count}>{count}</p>
            <button className={styles.btn} onClick={push}>+</button>
        </div>
    );
};



export default Counter;