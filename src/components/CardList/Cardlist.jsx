import React, { useState } from 'react';
import Card from '../Card/Card';
import { useParams } from 'react-router';
import styles from './CardList.module.css';
import { getValueProducts } from '../../FakeAPI/products';
import MyLink from '../../UI/MyLink/MyLink';
import { motion } from 'framer-motion'
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';

const Cardlist = () => {
    const params = useParams()
    const fishName = params.id 
    const allFish = getValueProducts(fishName)

    const [filter, setFilter] = useState({sort: '', select: ''})
    const [fish, setFish] = useState(allFish)

    const sortItems = (sort) => {
        setFilter({...filter, select: sort})
        if (fish.find(x => typeof x[sort] !== 'number')){
            return fish.sort((a,b)=>a[sort].localeCompare(b[sort]))
        } else { return fish.sort((a,b) => a[sort] - b[sort])}}


    React.useEffect(() => {
        const result = allFish.filter(allFish => allFish.title.toLowerCase().includes(filter.sort.toLowerCase()))
        setFish(result)
    },[filter.sort])
  

    if(!allFish.length) {
        return (
        <motion.div 
            className={styles.main}
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 1, transition: {duration: 0.05}}}
        >
            <img src='/foncard.jpg' alt="" className={styles.fon}/>
            <MyLink to={'/mainpage'}/>
            <h1 className={styles.name}>{fishName}</h1>
            <h1 className={styles.noyName}>Товар не найден...</h1>
        </motion.div>
        )
    };
    
    return (
        <motion.div 
            className={styles.main}
            initial={{opacity: 0}}
            animate={{opacity: 1 }}
            exit={{opacity: 1, transition: {duration: 0.05}}}
        >
            <img src='/foncard.jpg' alt="" className={styles.fon}/>
            <MyLink to={'/mainpage'}/>
            <h1 className={styles.name}>{fishName}</h1>
            <div className={styles.contAction}>
                <Input
                    value={filter.sort} 
                    onChange={e => setFilter({...filter, sort: e.target.value})}
                    type="text" 
                    placeholder='Поиск...'
                />

                <Select
                    value={filter.select}
                    onChange={sortItems}
                    defaulValue='Сортировка по'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'price', name: 'По цене'}
                    ]}
                />
            </div>
            {
                fish.length 
                ?   <div className={styles.container}>
                        {fish.map(elem => <Card info={elem} key={elem.id}/>)}
                    </div>
                : <h1 className={styles.titleSearch}>Ничего не найдено...</h1>
            }
            
        </motion.div>
    );
};



export default Cardlist;