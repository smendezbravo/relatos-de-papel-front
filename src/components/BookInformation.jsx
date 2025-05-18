import React, { useContext } from "react";
import { CartContext } from "../context/SimpleCartContext";
import ActionButton from "../components/ActionButton";
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
      "id":BookId,
      "titulo":BookTitle,
      "autor":BookAuthor,
      "descripcion":BookDescription,
      "precio":BookPrice,
      "anio":BookYear,
      "imagen":BookImage,
      "calificacion":BookQualification
   }

  const { addToCart } = useContext(CartContext);


  return (
    <div className="book-information">
      <div className="header-information">
        <h2>{BookTitle}</h2>
        <ActionButton text="Añadir al carrito" className="action-button" onClick={() => addToCart(Book)} />
      </div>

      <div className="general-information">
        <div className="image-information">
          <img src={BookImage} className="card-img-top" alt={BookTitle} />
        </div>

        <div className="book-information__details">
          <div className="detail-item">
            <span className="detail-autor">{BookAuthor}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Año de publicación:</span>
            <span>{BookYear}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Precio:</span>
            <span>{BookPrice} €</span>
          </div>
        </div>
      </div>

      <div>
        <h3>
          <strong>Descripción:</strong>
        </h3>
        <p>{BookDescription}</p>
      </div>
    </div>
  );
}
