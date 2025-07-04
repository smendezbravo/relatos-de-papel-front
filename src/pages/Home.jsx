import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Section from "../components/Section";
import { Container } from "react-bootstrap";

export default function Home() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const response = await fetch("http://192.168.112.1:8762/api/libros");
        const data = await response.json();
        setLibros(data);
      } catch (error) {
        console.error("Error fetching libros:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLibros();
  }, []);

  const genresList = Array.from(
    new Set(libros.flatMap((l) => l.categoria.split(",").map((g) => g.trim())))
  ).sort();

  function filterAndSort(librosArr) {
    let filtered = librosArr;
    if (search) {
      filtered = filtered.filter((l) =>
        l.titulo.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (genre) {
      filtered = filtered.filter((l) =>
        l.genero.toLowerCase().includes(genre.toLowerCase())
      );
    }
    if (order === "precio-asc") {
      filtered = filtered.slice().sort((a, b) => a.precio - b.precio);
    } else if (order === "precio-desc") {
      filtered = filtered.slice().sort((a, b) => b.precio - a.precio);
    }
    return filtered;
  }

  function handleClearFilters() {
    setSearch("");
    setGenre("");
    setOrder("");
  }

  const masVendidos = filterAndSort(libros.slice(0, 25));
  const novedades = filterAndSort(libros.slice(25, 50));

  if (loading) return <p className="text-center mt-5">Cargando libros...</p>;

  return (
    <>
      <Hero />
      <Container fluid className="px-0 px-sm-3 mt-4">
        <FilterBar
          search={search}
          genre={genre}
          order={order}
          onSearchChange={setSearch}
          onGenreChange={setGenre}
          onOrderChange={setOrder}
          genresList={genresList}
          onClearFilters={handleClearFilters}
        />

        {/* Sección Más Vendidos */}
        <div id="mas-vendidos" className="mt-4">
          <Section
            titulo="Libros Más Vendidos"
            libros={masVendidos}
            gridConfig={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          />
        </div>

        {/* Sección Novedades */}
        <div id="novedades" className="mt-5 mb-4">
          <Section
            titulo="Novedades"
            libros={novedades}
            gridConfig={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          />
        </div>
      </Container>
    </>
  );
}
