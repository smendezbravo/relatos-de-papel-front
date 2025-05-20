import { Link } from 'react-router-dom';
import { CartContext } from '../components/SimpleCartContext';
import '../styles/header.css';
import useCart from '../hooks/useCart';


export default function Header() {
  const { getTotalQuantity } = useCart();
  const itemCount = getTotalQuantity();
  return (
    <header className="header">
      <div className="header__logo">
        <span role="img" aria-label="logo">📖</span>
        <span>Relatos de papel</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li><Link to="/home">Productos</Link></li>
          <li><Link to="/cart">Carrito ({itemCount})</Link></li>
        </ul>
      </nav>
    </header>
  );
}
