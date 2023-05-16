import React from 'react';
import styles from './Present.module.css'
import PresentItem from './PresentItem/PresentItem';

const Present = ({titleApp}) => {

    const arrayTitle = titleApp.split('')

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                {arrayTitle.map((e, index) => 
                        <PresentItem title={e} key={index}/>
                )}
            </div>
                <p className={styles.by}>Интернет-магазин рыбок для аквариума</p>
        </div>
    );
};


export default Present;