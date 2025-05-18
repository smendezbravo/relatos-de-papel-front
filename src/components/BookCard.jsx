import React from "react";

const BookCard = ({ libro }) => {
  return (
    <div className="card h-100 shadow-sm border-0" style={{ width: "100%", maxWidth: "18rem" }}>
      <img
        src={libro.imagen}
        className="card-img-top"
        alt={libro.titulo}
        style={{ height: "260px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold lh-sm text-dark" style={{ lineHeight: "1.2em", height: "2.4em", overflow: "hidden" }}>
          {libro.titulo}
        </h5>
        <p className="card-text text-muted" style={{ lineHeight: "1.2em", height: "2.4em", overflow: "hidden" }}>
          {libro.autor}
        </p>
        <div className="mb-2">
          <span className="text-warning">★ ★ ★ ★ ☆</span>
        </div>
        <p className="text-muted mb-1">Año: {libro.anio}</p>
        <p className="text-success mb-2">Quedan 100+ unidades</p>
        <h5 className="mt-auto fw-bold">${libro.precio.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default BookCard;

