import { useParams } from "react-router-dom";
import libros from "../data/libros";
import BookInformation from "../components/BookInformation";

export default function BookDetails() {
  const { id } = useParams();
  const libro = libros.find((libro) => libro.id.toString() === id.toString());

  if (!libro) {
    return (
      <div className="container py-5">
        <h2>Libro no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <BookInformation libro={libro} />
    </div>
  );
}
