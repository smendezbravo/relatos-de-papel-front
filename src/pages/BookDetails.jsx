import { useParams } from "react-router-dom";
import BookInformation from "../components/BookInformation";
import libros from "../data/libros";
import { useNavigate } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  const navigate = useNavigate();
  const LibroFiltrado = libros.find(
    (libro) => libro.id.toString() === id.toString()
  );

  if (!LibroFiltrado) {
    return (
      <div>
        <h2>Libro no encontrado</h2>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => navigate("/home")}>Seguir comprando</button>

      <h2>Detalles del libro</h2>
      <BookInformation
        BookId={LibroFiltrado.id}
        BookTitle={LibroFiltrado.titulo}
        BookAuthor={LibroFiltrado.autor}
        BookPrice={LibroFiltrado.precio}
        BookDescription={LibroFiltrado.descripcion}
        BookImage={LibroFiltrado.imagen}
        BookYear={LibroFiltrado.anio}
        BookQualification={LibroFiltrado.calificacion}
      />
    </div>
  );
}
