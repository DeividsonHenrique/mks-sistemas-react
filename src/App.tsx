import React, { useState } from "react";
import Header from "./components/Header";
import CheckOut from "./components/CheckOut";
import Produtos from "./components/Produtos";
import Footer from "./components/Footer";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

const App: React.FC = () => {
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleCartClick = () => {
    setCheckoutVisible(true);
  };

  const handleCloseClick = () => {
    setCheckoutVisible(false);
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const itemExists = prevCartItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCartItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleIncrementQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = (id: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculoTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calcularCartCount = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const total = calculoTotal();
  const cartCount = calcularCartCount();

  return (
    <>
      <Header onCartClick={handleCartClick} cartCount={cartCount} />
      <Produtos onAddToCart={handleAddToCart} />
      <CheckOut
        isvisible={isCheckoutVisible}
        onClose={handleCloseClick}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        onIncrementQuantity={handleIncrementQuantity}
        onDecrementQuantity={handleDecrementQuantity}
        total={total}
      />
      <Footer />
    </>
  );
};

export default App;
