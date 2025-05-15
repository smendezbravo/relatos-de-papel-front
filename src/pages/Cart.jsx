import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/SimpleCartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Tu carrito</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - Cantidad: {item.quantity} - Precio: ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate('/checkout')}>Ir a Checkout</button>
    </div>
  );
}

