import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from '../context/SimpleCartContext';
import "../styles/BookCard.css";

const BookCard = ({ libro }) => {
  const { addToCart } = useContext(CartContext);

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
        {/* Bloque que alterna info y botones */}
        <div className="bookcard-info-actions">
          <div className="bookcard-info">
            <div className="mb-2">
              <span className="text-warning">★ ★ ★ ★ ☆</span>
            </div>
            <p className="text-muted mb-1">Año: {libro.anio}</p>
            <p className="text-success mb-2">Quedan 100+ unidades</p>
          </div>
          <div className="bookcard-actions">
            <button
              className="bookcard-btn bookcard-btn-naranja"
              onClick={() => addToCart(libro)}
            >
              <i className="bi bi-cart me-2"></i> Agregar
            </button>
            <Link
              to={`/bookdetails/${libro.id}`}
              className="bookcard-btn bookcard-btn-outline-naranja text-decoration-none text-center"
            >
              Ver más
            </Link>
          </div>
        </div>
        <h5 className="fw-bold">${libro.precio.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default BookCard;

