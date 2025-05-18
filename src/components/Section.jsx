import React from "react";
import BookCard from "./BookCard";

const Section = ({ titulo, libros }) => {
  return (
    <section className="py-5 w-100" style={{ backgroundColor: "#fff" }}>
      <div className="container-fluid">
        <h2 className="mb-4 fw-bold">{titulo}</h2>
        <div className="row g-4">
          {libros.map((libro) => (
            <div key={libro.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <BookCard libro={libro} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;