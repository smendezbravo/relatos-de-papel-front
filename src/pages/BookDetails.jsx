import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BookInformation from "../components/BookInformation";
import "../styles/BookDetails.css";

export default function BookDetails() {
  const { id } = useParams();
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch(`http://localhost:8081/api/libros/${id}`);
        if (!response.ok) {
          throw new Error("Error al cargar el libro");
        }
        const data = await response.json();
        setLibros([data]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  if (loading) {
    return <p>Cargando libro...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const libro = libros.find((libro) => libro.id.toString() === id.toString());

  if (!libro) {
    return (
      <div className="book-details__not__found">
        <h2>Libro no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="book__details">
      <BookInformation libro={libro} />
    </div>
  );
}
