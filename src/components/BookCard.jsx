import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/BookCard.css";

const BookCard = ({ libro }) => {
  return (
    <div className="card h-100 shadow-sm border-0 bookcard-container">
      <img
        src={libro.imagen}
        className="card-img-top bookcard-img"
        alt={libro.titulo}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold lh-sm text-dark bookcard-title">
          {libro.titulo}
        </h5>
        <p className="card-text text-muted bookcard-author">
          {libro.autor}
        </p>
        <div className="mb-2">
          <span className="text-warning">★ ★ ★ ★ ☆</span>
        </div>
        <p className="text-muted mb-1">Año: {libro.anio}</p>
        <p className="text-success mb-2">Quedan 100+ unidades</p>
        <h5 className="fw-bold">${libro.precio.toFixed(2)}</h5>
        <div className="mt-3 d-flex flex-column gap-2">
          <Link to={`/bookdetails/${libro.id}`} className="btn btn-primary btn-sm bookcard-btn">
            Ver más
          </Link>
          <button className="btn btn-outline-success btn-sm bookcard-btn">
            <i className="bi bi-cart"></i> Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
