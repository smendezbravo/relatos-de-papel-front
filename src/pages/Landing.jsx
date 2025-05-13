import { useNavigate } from "react-router-dom";
import '../styles/Landing.css'

export default function Landing() {
  const navigate = useNavigate();

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
