import React from 'react';
import styles from './Button.module.css'

const Button = ({children, ...props}) => {
    return (
        <div className={styles.container}>

        
            <button {...props} className={styles.link}>
                <div className={styles.left}></div>
                    {children}
                <div className={styles.right}></div>
            </button>
        </div>
    );
};



export default Button;