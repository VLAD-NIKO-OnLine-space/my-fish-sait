import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {

    const rootStyles = [styles.footer]

    return (
        <div className={rootStyles.join(' ')}>
            <div className={styles.content}>
                <h1>FOOTER</h1>
            </div>
        </div>
    );
};


export default Footer;