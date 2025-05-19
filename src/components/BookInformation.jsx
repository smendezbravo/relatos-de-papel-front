import React, { useContext } from "react";
import { CartContext } from "../context/SimpleCartContext";
import "../styles/BookInformation.css";

export default function BookInformation({
  BookId,
  BookTitle,
  BookAuthor,
  BookPrice,
  BookDescription,
  BookImage,
  BookYear,
  BookQualification,
}) {
  const Book = {
    id: BookId,
    titulo: BookTitle,
    autor: BookAuthor,
    descripcion: BookDescription,
    precio: BookPrice,
    anio: BookYear,
    imagen: BookImage,
    calificacion: BookQualification,
  };

  const { addToCart } = useContext(CartContext);

  return (
    <div className="book-information">
      <div className="header-information">
        <h2>{BookTitle}</h2>
        <ActionButton
          text="Añadir al carrito"
          className="action-button"
          onClick={() => addToCart(Book)}
        />
      </div>

      {/* Columna central: Información principal y reseña */}
      <div className="col-12 col-md-8 col-lg-6">
        <h2 className="mb-2">{libro.titulo}</h2>
        <h5 className="text-muted mb-3">{libro.autor}</h5>
        <div className="mb-3">
          <span className="badge bg-warning text-dark me-2">
            {libro.calificacion} ★
          </span>
          <span className="badge bg-secondary">{libro.categoria}</span>
          <span className="badge bg-info text-dark ms-2">{libro.genero}</span>
        </div>
        <div className="mb-4">
          <button
            className="btn btn-danger btn-lg"
            onClick={() => addToCart(libro)}
          >
            <i className="bi bi-cart me-2"></i>
            Añadir al carrito
          </button>
        </div>
        <h4 className="mb-3">Reseña</h4>
        <div
          className="bg-light p-3 rounded shadow-sm mb-4"
          style={{ minHeight: "120px" }}
        >
          {libro.resena || "No hay reseña disponible para este libro."}
        </div>
      </div>

      {/* Columna derecha: Descripción */}
      <div className="col-12 col-lg-3">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">Descripción</h5>
            <p className="card-text">{libro.descripcion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
