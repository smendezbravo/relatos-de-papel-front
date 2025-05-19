import React, { useContext } from "react";
import { CartContext } from "../context/SimpleCartContext";
import "../styles/BookInformation.css";
import { useNavigate } from "react-router-dom";

export default function BookInformation({ libro }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="row g-4 book-details-main">
      <a href="/home">Atrás</a>
      {/* Columna izquierda: Portada y ficha técnica */}
      <div className="col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center">
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="img-fluid rounded shadow mb-3"
          style={{ maxHeight: "340px", objectFit: "contain" }}
        />
        <div className="card w-100 mt-2">
          <div className="card-body p-3">
            <ul className="list-unstyled mb-0">
              <li>
                <strong>Autor:</strong> {libro.autor}
              </li>
              <li>
                <strong>Año:</strong> {libro.anio}
              </li>
              <li>
                <strong>Precio:</strong> ${libro.precio}
              </li>
              <li>
                <strong>Calificación:</strong> {libro.calificacion} ⭐
              </li>
              <li>
                <strong>Género:</strong> {libro.genero}
              </li>
              <li>
                <strong>Categoría:</strong> {libro.categoria}
              </li>
            </ul>
          </div>
        </div>
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
