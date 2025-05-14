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
        <ActionButton text="Añadir al carrito" className="action-button" />
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
