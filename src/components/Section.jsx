import React from "react";
import BookCard from "./BookCard";

export default function Section({ titulo, libros }) {
  // Determina la cantidad de columnas por fila según el número de libros
  let colsClass = "row row-cols-6"; // 6 columnas por fila por defecto

  if (libros.length === 1) {
    colsClass = "row row-cols-1 justify-content-center";
  } else if (libros.length === 2) {
    colsClass = "row row-cols-2 justify-content-center";
  } else if (libros.length === 3) {
    colsClass = "row row-cols-3 justify-content-center";
  } else if (libros.length === 4) {
    colsClass = "row row-cols-4";
  } else if (libros.length === 5) {
    colsClass = "row row-cols-5";
  } // 6 o más: row-cols-6

  return (
    <section className="mb-5">
      <h3 className="mb-4">{titulo}</h3>
      <div className={colsClass}>
        {libros.map((libro) => (
          <div key={libro.id} className="col mb-4 d-flex">
            <BookCard libro={libro} />
          </div>
        ))}
      </div>
    </section>
  );
}
