import React from 'react';
import styles from './Select.module.css'

const Select = ({options, defaulValue, value, onChange}) => {
    return (
        <div className={styles.wrapper}>

        
        <select 
            className={styles.select}
            value={value}
            onChange={e=>onChange(e.target.value)}
        >
            <option className={styles.option} disabled value="">{defaulValue}</option>
            {options.map(elem => 
                <option className={styles.option} key={elem.value} value={elem.value}>
                    {elem.name}
                </option>
                )}
        </select>
        </div>
    );
};


export default Select;