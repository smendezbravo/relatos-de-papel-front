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

  //Si hay más de un elemento restamos la cantidad cuando no borramos con el .filter
  const removeFromCart = (id) => {
  const updatedCart = cart
    .map(item => {
      if (item.id === id) {
        if (item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return null;
        }
      }
      return item;
    })
    .filter(Boolean);

  setCart(updatedCart);
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
