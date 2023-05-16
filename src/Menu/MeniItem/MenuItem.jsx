import React from 'react';
import ModalLink from '../../UI/ModalLink/ModalLink';

const MenuItem = ({menuItems, setVisible}) => {
    return (
        <ModalLink 
            to={menuItems.to} 
            onClick={()=>setVisible(false)}
        >
            {menuItems.value}
        </ModalLink>
    );
};

export default MenuItem;