import React, { useContext } from "react";
import { CartContext } from "../context/SimpleCartContext";
import "../styles/BookInformation.css";
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";

export default function BookInformation({ libro }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <>
      <a href="/home" className="book-information__back-link">
        Atrás
      </a>

      <div className="book-information">
        <div className="book-information__image-details">
          <img
            src={libro.imagen}
            alt={libro.titulo}
            className="book-information__image"
          />
          <div className="book-information__details">
            <p>
              <strong>Autor:</strong> {libro.autor}
            </p>
            <p>
              <strong>Año:</strong> {libro.anio}
            </p>
            <p>
              <strong>Precio:</strong> ${libro.precio}
            </p>
            <p>
              <strong>Calificación:</strong> {libro.calificacion} ⭐
            </p>
            <p>
              <strong>Género:</strong> {libro.genero}
            </p>
            <p>
              <strong>Categoría:</strong> {libro.categoria}
            </p>
          </div>
        </div>

        <div className="book-information__main">
          <h2 className="book-information__title">{libro.titulo}</h2>
          <h5 className="book-information__author">{libro.autor}</h5>
          <div className="book-information__badges">
            <span className="book-information__badge book-information__badge--rating">
              {libro.calificacion} ★
            </span>
            <span className="book-information__badge book-information__badge--category">
              {libro.categoria}
            </span>
            <span className="book-information__badge book-information__badge--genre">
              {libro.genero}
            </span>
          </div>
          <ActionButton
            text="Añadir al carrito"
            onClickFunction={() => addToCart(libro)}
          />

          <h4 className="book-information__subtitle">Reseña</h4>
          <div className="book-information__review">
            {libro.resena || "No hay reseña disponible para este libro."}
          </div>
        </div>

        <div className="book-information__description">
          <h5 className="book-information__description-title">Descripción</h5>
          <p>{libro.descripcion}</p>
        </div>
      </div>
    </>
  );
}
