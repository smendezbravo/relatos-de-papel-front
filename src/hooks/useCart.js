import { useContext } from 'react';
import { CartContext } from '../context/SimpleCartContext.jsx';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de SimpleCartProvider');
  }
  return context;
};
export default useCart;
