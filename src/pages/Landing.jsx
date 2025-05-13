import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="landing">
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Tu libreria digital de confianza</p>
      <button onClick={handlAccess}> Acceder </button>
    </div>
  );
}
