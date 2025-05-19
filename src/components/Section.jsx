import React from "react";
import BookCard from "./BookCard";

export default function Section({ titulo, libros }) {
  return (
    <section className="mb-5">
      <h3 className="mb-4">{titulo}</h3>
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-4">
        {libros.map((libro) => (
          <div key={libro.id} className="col d-flex">
            <BookCard libro={libro} />
          </div>
        ))}
      </div>
    </section>
  );
}
