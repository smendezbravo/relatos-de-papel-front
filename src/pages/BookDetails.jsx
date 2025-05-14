import { useParams } from "react-router-dom";
import BookInformation from "../components/BookInformation";
import libros from "../data/libros";

export default function BookDetails() {
  const { id } = useParams();
  let LibroFiltrado = libros.find(
    (libro) => libro.id.toString() === id.toString()
  );
  let titulo = LibroFiltrado.titulo;
  return (
    <div>
      <h2>Detalles del libro</h2>

      <BookInformation
        BookTitle={titulo}
        BookAuthor={LibroFiltrado.autor}
        BookPrice={LibroFiltrado.precio}
        BookDescription={LibroFiltrado.descripcion}
        BookImage={LibroFiltrado.imagen}
        BookYear={LibroFiltrado.anio}
      />
    </div>
  );
}
