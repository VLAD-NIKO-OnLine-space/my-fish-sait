import React from 'react';
import styles from './ModalLink.module.css'
import { Link } from 'react-router-dom';

const ModalLink = ({children, ...props}) => {
    return (
        <Link {...props} className={styles.link}>
            <div className={styles.left}></div>
                {children}
            <div className={styles.right}></div>
        </Link>
    );
};



export default ModalLink;