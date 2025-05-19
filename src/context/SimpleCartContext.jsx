import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const SimpleCartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
      updateQuantity(product.id, existingProduct.quantity + 1);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };


  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => 
      item.id === id
        ? { ...item, quantity: Math.max(1, quantity) }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalQuantity = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
