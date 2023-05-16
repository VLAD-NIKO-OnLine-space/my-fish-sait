import React from 'react';
import styles from './DelButton.module.css'

const DelButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.deBtn}>
            {children}
        </button>
    );
};



export default DelButton;