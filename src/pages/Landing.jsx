import { useNavigate } from "react-router-dom";
import '../styles/Landing.css'
import { useEffect } from "react";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/home');
    }, 5000); //5000 = 5seg
    return () => clearTimeout(timeout);
  }, [navigate]);

  const handlAccess = () => {
    navigate('/home');
  }
  return (
    <div className="landing">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Tu libreria digital de confianza</p>
      <button onClick={handlAccess}> Acceder </button>
    </div>
  );
}
