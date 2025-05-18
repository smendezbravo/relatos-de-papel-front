import Hero from "../components/Hero";
import FilterBar from "../components/FilterBar";
import Section from "../components/Section";
import libros from "../data/libros";

export default function Home() {
  const masVendidos = libros.slice(0, 3); //se crea una constante masVendidos que contiene los primeros 3 libros del array libros
  const novedades = libros.slice(3, 5);  //se crea una constante novedades que contiene los libros del 4 al 5 del array libros

  return (
    <>
      <Hero />
      <div className="container-fluid px-0 mt-4">
        <FilterBar />
        <Section titulo="Libros Más Vendidos" libros={masVendidos} />
        <Section titulo="Novedades" libros={novedades} />
      </div>
    </>
  );
}

