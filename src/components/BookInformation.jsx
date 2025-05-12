import ActionButton from "../components/ActionButton";

export default function BookInformation(
  BookTitle,
  BookAuthor,
  BookPrice,
  BookDescription,
  BookImage,
  BookYear
) {
  return (
    <div className="book-information">
      <div className="header-information">
        <h1>{BookTitle}</h1>
        <ActionButton />
      </div>
      <div className="general-information">
        <div className="image-information">
          <img src={BookImage} alt={BookTitle} />
        </div>
        <div className="book-information__details">
          <p>Autor: {BookAuthor}</p>
          <p>Año publicación: {BookYear}</p>
          <p>Precio: {BookPrice}</p>
        </div>
      </div>
      <div>
        <p>Descripción: {BookDescription}</p>
      </div>
    </div>
  );
}
