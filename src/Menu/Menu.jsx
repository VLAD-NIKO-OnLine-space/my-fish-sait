import React, { useState } from 'react';
import styles from './Menu.module.css';
import Modal from '../UI/Modal/Modal';
import MenuList from './MenuList/MenuList';

const Menu = () => {

    const [visible, setVisible] = useState(false)
    const rootStyle = [styles.arrow]
    if(visible){
        rootStyle.push(styles.active)
    }

    return (
        <div className={styles.main}>
            <img src="/arrow.gif" alt="arrow-gif" className={rootStyle.join(' ')} onClick={()=>setVisible(!visible)}/>
            <Modal visible={visible} setVisible={setVisible}>
                <MenuList setVisible={setVisible}/>
            </Modal>
        </div>

    );
};



export default Menu;