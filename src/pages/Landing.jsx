import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import "../styles/Landing.css";

export default function Landing() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowModal(true);

      // redirigimos despues del popup
      const redirect = setTimeout(() => {
        navigate("/home");
      }, 1000);

      return () => clearTimeout(redirect);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handlAccess = () => {
    navigate('/home');
  };

  return (
  <>
    <div className="landing">
      <h1 className="landing__title">Bienvenido a Relatos de Papel</h1>
      <p className="landing__subtitle">Tu librería digital de confianza</p>
      <button className="landing__button" onClick={handlAccess}>
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
