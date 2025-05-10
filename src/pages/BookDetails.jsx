import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del libro</h1>
      <p>Mostrando información del libro con ID: {id}</p>
    </div>
  );
}
