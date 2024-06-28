import { useState } from 'react'
import './App.css'
import CheckOut from './components/CheckOut';

import Footer from './components/Footer'
import Header from './components/Header'
import Produtos from './components/Produtos'

function App() {

  const [isCheckOutVisible, setIsCheckOutVisible] = useState(false);
  const [cartItems , setCartItems] = useState([]);

  const handleCartClick = () => {
    setIsCheckOutVisible(true);
  }

  const handleCloseClick = () => {
    setIsCheckOutVisible(false);
  }

  const handleAddToCart = (product) => {
    setCartItem([...cartItem, product]);
  }
  return (
    <>
      
      <Header onCartClick={handleCartClick}/>
      <Produtos/>
      <Footer/>
      <CheckOut isVisible={isCheckOutVisible} onClose={handleCloseClick} cartItems={cartItems}/>
    </>
  )
}

export default App
