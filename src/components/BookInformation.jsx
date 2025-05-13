import ActionButton from "../components/ActionButton";
import "../styles/BookInformation.css";

export default function BookInformation({
  BookTitle,
  BookAuthor,
  BookPrice,
  BookDescription,
  BookImage,
  BookYear,
}) {
  return (
    <div className="book-information">
      <div className="header-information">
        <h2>{BookTitle}</h2>
        <ActionButton text="Añadir al carrito" />
      </div>
      <div className="general-information">
        <div className="image-information">
          <ActionButton text="Imagen" />
        </div>
        <div className="book-information__details">
          <p>
            <strong>Autor:</strong> {BookAuthor}
          </p>
          <p>
            <strong>Año publicación:</strong> {BookYear}
          </p>
          <p>
            <strong>Precio:</strong> {BookPrice}
          </p>
        </div>
      </div>
      <div>
        <h3>
          <strong>Descripción: </strong>
        </h3>
        <p>{BookDescription}</p>
      </div>
    </div>
  );
}
