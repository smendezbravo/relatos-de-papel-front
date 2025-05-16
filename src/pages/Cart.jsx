import React, { useContext } from 'react';
import { CartContext } from '../context/SimpleCartContext';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calcular el total del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Manejar la navegación al checkout
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <h1 className="cart__title">Tu carrito de compras</h1>
      </div>

      {cart.length === 0 ? (
        <div className="cart__empty">
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <div className="cart__items">
          <table className="cart__table">
            <thead className="cart__thead">
              <tr>
                <th className="cart__th cart__th--libro">Libro</th>
                <th className="cart__th cart__th--cantidad">Cantidad</th>
                <th className="cart__th cart__th--precio">Precio</th>
                <th className="cart__th cart__th--subtotal">Subtotal</th>
                <th className="cart__th cart__th--acciones">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="cart__row">
                  <td className="cart__td cart__td--libro">{item.title}</td>
                  <td className="cart__td cart__td--cantidad">{item.quantity}</td>
                  <td className="cart__td cart__td--precio">${item.price.toFixed(2)}</td>
                  <td className="cart__td cart__td--subtotal">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="cart__td cart__td--acciones">
                    <Button
                      variant="danger"
                      className="cart__remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


          <div className="cart__total">
            <h4 className="cart__total-label">Total:</h4>
            <p className="cart__total-price">${total.toFixed(2)}</p>
          </div>

          <div className="cart__actions">
            <Button variant="secondary" className="cart__btn" onClick={() => navigate('/home')}>
              Seguir comprando
            </Button>
            <Button variant="primary" className="cart__btn" onClick={handleCheckout}>
              Ir al Checkout
            </Button>
          </div>
        </div>
      )}

      <div className="cart__footer">
        <Button variant="outline-danger" onClick={clearCart}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  );
}
