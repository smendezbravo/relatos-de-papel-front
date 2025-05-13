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
    <div>
      <h1>Bienvenido a Relatos de Papel</h1>
      <p>Redirigiendo a la página principal en unos segundos...</p>
    </div>
  );
}
