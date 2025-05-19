import React, { useState } from "react";
import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Section from "../components/Section";
import libros from "../data/libros";
import { Container } from "react-bootstrap"; 

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
        l.titulo.toLowerCase().includes(search.toLowerCase())
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
      
      <Container fluid className="px-0 px-sm-3 mt-4">  {/* padding para pantallas pequeñas */}
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
            gridConfig={{ xs: 12, sm: 6, md: 4, lg: 3 }}  // Config responsiva
          />
        </div>

        {/* Sección Novedades */}
        <div id="novedades" className="mt-5 mb-4">
          <Section 
            titulo="Novedades" 
            libros={novedades}
            gridConfig={{ xs: 12, sm: 6, md: 4, lg: 3 }}  // Config responsiva
          />
        </div>
      </Container>
    </>
  );
}
