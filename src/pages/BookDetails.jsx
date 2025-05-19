import { useParams } from "react-router-dom";
import libros from "../data/libros";
import BookInformation from "../components/BookInformation";
import '../styles/BookDetails.css'

export default function BookDetails() {
  const { id } = useParams();
  const libro = libros.find((libro) => libro.id.toString() === id.toString());

  if (!libro) {
    return (
      <div className="book-details__not__found">
        <h2>Libro no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="book__details">
      <BookInformation libro={libro} />
    </div>
  );
}
