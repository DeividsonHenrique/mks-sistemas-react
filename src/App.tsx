import { useState } from 'react'
import './App.css'
import CheckOut from './components/CheckOut';
import Footer from './components/Footer'
import Header from './components/Header'
import Produtos from './components/Produtos'

function App() {

  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems , setCartItems] = useState([]);

  const handleCartClick = () => {
    setCheckoutVisible(true);
  }

  const handleCloseClick = () => {
    setCheckoutVisible(false);
  }

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
  };


  const handleRemoveItem = (id) =>{
    setCartItems(cartItems.filter(item => item.id !== id))
  }


  const handleIncrementQuantity = (id: number) => {
    setCartItems(cartItems.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
  }

  const handleDecrementQuantity = (id: never) => {
    setCartItems(cartItems.map(item => item.id === id ? {...item, quantity: item.quantity - 1} : item))
  }

  return (
    <>
      
      <Header onCartClick={handleCartClick} handleCartClick={handleCartClick}/>
      <Produtos onAddToCart={handleAddToCart}/>
      <Footer/>
      <CheckOut isvisible={isCheckoutVisible}
       onClose={handleCloseClick}
        cartItems={cartItems}
         onRemoveItem={handleRemoveItem}
         onDecrementQuantity={handleDecrementQuantity}
         onIncrementQuantity={handleIncrementQuantity}
         />
    </>
  )
}

export default App
