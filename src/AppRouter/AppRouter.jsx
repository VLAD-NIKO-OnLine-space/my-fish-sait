import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import MainPage from '../pages/MainPage/MainPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Cardlist from '../components/CardList/Cardlist';
import { AnimatePresence } from 'framer-motion';
import ShoppingCart from '../pages/ShopingPage/ShoppingCart';
import FishInfoPage from '../pages/FishInfoPage/FishInfoPage';

const AppRouter = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route  path='/mainpage' element={<MainPage/>}></Route>
                <Route  path='/about' element={<AboutPage/>}></Route>
                <Route  path='/shopingcart' element={<ShoppingCart/>}></Route>
                <Route  path='/mainpage/:id' element={<Cardlist/>}></Route>
                <Route  path='/fishinfo/:id' element={<FishInfoPage/>}></Route>
                <Route path="*" element={<Navigate to="/mainpage" replace />}/>
            </Routes>
        </AnimatePresence>
        
    );
};



export default AppRouter;