import React from 'react';
import styles from './ArrangeButton.module.css'

const ArrangeButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.link}>
            <div className={styles.left}></div>
                {children}
            <div className={styles.right}></div>
 
        </button>
    );
};


export default ArrangeButton;