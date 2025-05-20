import React, { useContext } from "react";
import { CartContext } from "../components/SimpleCartContext";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/cart.css";
import ActionButton from "../components/ActionButton";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + (item.precio ? item.precio * item.quantity : 0),
    0
  );

  if (cart.length === 0) {
    return <p>Tu carrito está vacío.</p>;
  }

  return (
    <div className="cart">
      <div className="cart__header">
        <h1 className="cart__title">Tu carrito de compras</h1>
      </div>

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
                <td className="cart__td cart__td--libro">{item.titulo}</td>
                <td className="cart__td cart__td--cantidad">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    min="1"
                  />
                </td>
                <td className="cart__td cart__td--precio">
                  ${item.precio ? item.precio.toFixed(2) : "N/A"}
                </td>
                <td className="cart__td cart__td--subtotal">
                  $
                  {item.precio
                    ? (item.precio * item.quantity).toFixed(2)
                    : "N/A"}
                </td>
                <td className="cart__td cart__td--acciones">
                  <ActionButton
                    text="Eliminar"
                    onClickFunction={() => removeFromCart(item.id)}
                  />
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
          <Button
            variant="secondary"
            className="cart__btn"
            onClick={() => navigate("/home")}
          >
            Seguir comprando
          </Button>
          <Button
            variant="primary"
            className="cart__btn"
            onClick={() => navigate("/checkout")}
          >
            Ir al Checkout
          </Button>
        </div>
      </div>

      <div className="cart__footer">
        <ActionButton text="Vaciar carrito" onClickFunction={clearCart} />
      </div>
    </div>
  );
}
