import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './AppRouter/AppRouter'
import Menu from './Menu/Menu'
import Footer from './Footer/Footer'
import ShopIcon from './ShopIcon/ShopIcon'


function App() {


  return (
    <BrowserRouter>
      <AppRouter/>
      <Menu/>
      <ShopIcon/>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
