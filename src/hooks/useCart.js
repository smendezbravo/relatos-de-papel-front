import { useContext } from 'react';
import { CartContext } from '../context/SimpleCartContext.jsx';

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart error');
  }
  return context;
};
export default useCart;
