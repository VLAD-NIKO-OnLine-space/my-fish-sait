import React from 'react';
import styles from './AddButton.module.css'

const AddButton = ({children, ...props}) => {
    return (
        <button {...props} className={styles.btn}>
            {children}
        </button>
    );
};


export default AddButton;