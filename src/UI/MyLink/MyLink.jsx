import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MyLink.module.css'

const MyLink = ({to}) => {
    return (
        <div className={styles.container}>
            <Link className={styles.link} to={to}>
                <div className={styles.left}></div>
                    назад
                <div className={styles.right}></div>
            </Link>
        </div>
    );
};


export default MyLink;