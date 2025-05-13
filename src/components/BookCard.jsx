import { Link } from "react-router-dom";

export default function BookCard({ id, title, author, image, price }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">por {author}</p>
          <p className="card-text fw-bold">${price.toFixed(2)}</p>
          <Link to={`/libro/${id}`} className="btn btn-primary mt-auto">
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}
