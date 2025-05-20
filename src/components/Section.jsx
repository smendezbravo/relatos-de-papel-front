import React from "react";
import BookCard from "./BookCard";

export default function Section({ titulo, libros }) {
  return (
    <section className="mb-5">
      <h3 className="mb-4">{titulo}</h3>
      <div className="d-flex flex-wrap justify-content-start gap-4">
        {libros.map((libro) => (
          <BookCard key={libro.id} libro={libro} />
        ))}
      </div>
    </section>
  );
}
