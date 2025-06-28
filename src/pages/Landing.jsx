import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../styles/Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const timeoutRef = useRef(null);
  const redirectRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setShowModal(true);

      redirectRef.current = setTimeout(() => {
        navigate("/home");
      }, 1000);
    }, 4000);

    return () => {
      clearTimeout(timeoutRef.current);
      clearTimeout(redirectRef.current);
    };
  }, [navigate]);

  const handleAccess = () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(redirectRef.current);
    navigate("/home");
  };

  return (
    <>
      <div className="landing">
        <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
        <p className="landing__subtitle">Tu librería digital de confianza</p>
        <button className="landing__button" onClick={handleAccess}>
          Acceder
        </button>
      </div>

      <Modal show={showModal} centered backdrop="static" keyboard={false}>
        <Modal.Body className="landing__modal">
          Redirigiendo a la página principal...
        </Modal.Body>
      </Modal>
    </>
  );
}
