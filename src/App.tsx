import { useState } from 'react'
import './App.css'
import CheckOut from './components/CheckOut';

import Footer from './components/Footer'
import Header from './components/Header'
import Produtos from './components/Produtos'

function App() {

  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);

  const handleCartClick = () => {
    setIsCheckOutVisible(!isCheckOutVisible);
  }
  return (
    <>
      
      <Header onCartClick={handleCartClick}/>
      <Produtos/>
      <Footer/>
      <CheckOut isVisible={isCheckOutVisible} onClose={handleCartClick}/>
    </>
  )
}

export default App
