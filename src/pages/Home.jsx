import React, { useState } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Section from "../components/Section";
import libros from "../data/libros";

export default function Home() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [order, setOrder] = useState("");

  const genresList = Array.from(
    new Set(
      libros.flatMap(l => l.genero.split(",").map(g => g.trim()))
    )
  ).sort();

  function filterAndSort(librosArr) {
    let filtered = librosArr;
    if (search) {
      filtered = filtered.filter(l =>
        l.autor.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (genre) {
      filtered = filtered.filter(l =>
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

  // Función para limpiar filtros
  function handleClearFilters() {
    setSearch("");
    setGenre("");
    setOrder("");
  }

  const masVendidos = filterAndSort(libros.slice(0, 25));
  const novedades = filterAndSort(libros.slice(25, 50));

  return (
    <>
      <Hero />
      <div className="container-fluid px-0 mt-4">
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
        <div id="mas-vendidos">
          <Section titulo="Libros Más Vendidos" libros={masVendidos} />
        </div>
        <div id="novedades">
          <Section titulo="Novedades" libros={novedades} />
        </div>
      </div>
    </>
  );
}
