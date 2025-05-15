import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/SimpleCartContext';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Checkout() {

  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = () => {
    setShowModal(true); // Mostrar el modal al hacer clic en "Pagar"
  };

  const handleCancel = () => {
    setShowModal(false);
    clearCart();
    navigate('/');
  };

  const handleBackToCart = () => {
    navigate('/cart');
  };

  

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Resumen de tu compra</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info">Tu carrito está vacío.</div>
      ) : (
        <>
          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Libro</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-between align-items-center my-4">
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>

          <div className="d-flex gap-3">
            <button className="btn btn-secondary" onClick={handleBackToCart}>
              Volver al carrito
            </button>
            <button className="btn btn-danger" onClick={handleCancel}>
              Cancelar
            </button>
            <button className="btn btn-success ms-auto" onClick={handlePayment}>
              Pagar
            </button>
          </div>
          {/* ✅ Modal de confirmación */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Pedido confirmado</Modal.Title>
            </Modal.Header>
            <Modal.Body>¡Gracias por tu compra! Serás redirigido al inicio.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCancel}>
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}
