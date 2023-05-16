import React from 'react';
import styles from './Loader.module.css'


const Loader = () => {
    return (
        <div>
            <img src="/loading.gif" alt="load-gif" className={styles.loader}/>
        </div>
    );
};



export default Loader;