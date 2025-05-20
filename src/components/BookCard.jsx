import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from './SimpleCartContext';
import "../styles/BookCard.css";

const BookCard = ({ libro }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm border-0 bookcard-container">
      {/* 
        Contenedor de la imagen con altura fija y overflow oculto.
        Esto asegura que todas las imágenes tengan el mismo alto visual.
      */}
      <div className="bookcard-img-container">
        <img
          src={libro.imagen}
          className="bookcard-img"
          alt={libro.titulo}
        />
      </div>
      <div className="card-body d-flex flex-column">
        {/* Bloque flexible que ocupa el espacio entre la imagen y el precio */}
        <div className="bookcard-main-content">
          <h5 className="card-title fw-bold lh-sm text-dark bookcard-title">
            {libro.titulo}
          </h5>
          <p className="card-text text-muted bookcard-author">
            {libro.autor}
          </p>
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
        </div>
        {/* El precio siempre alineado abajo */}
        <h5 className="fw-bold mt-3 bookcard-precio">${libro.precio.toFixed(2)}</h5>
      </div>
    </div>
  );
};

export default BookCard;
