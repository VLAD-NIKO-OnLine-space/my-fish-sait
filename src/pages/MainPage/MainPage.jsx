import React from 'react';
import styles from './MainPage.module.css';
import CategoryList from '../../components/CategoryList/CategoryList';
import Present from '../../components/Present/Present';
import { motion } from 'framer-motion'

const MainPage = () => {
    const titleApp  = 'DaillyFish'

    return (
        <motion.div className={styles.main}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: 0.05}}}
        >  
            <Present titleApp={titleApp}/>      
            <img src="./ocean.jpeg" alt="" className={styles.img}/>
            <div className={styles.cont}>
                <CategoryList/>
            </div>
        </motion.div>
    );
};



export default MainPage;