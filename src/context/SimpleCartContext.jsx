import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const SimpleCartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    { id: '1', title: '1984', price: 10.0, quantity: 1 },
    { id: '2', title: 'Rayuela', price: 15.0, quantity: 2 },
    { id: '3', title: 'El Quijote', price: 12.99, quantity: 2 },
    { id: '4', title: 'Cien Años de Soledad', price: 15.50, quantity: 1 },
  ]);

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
