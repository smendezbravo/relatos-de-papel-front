import Hero from '../components/Hero';
import Section from '../components/Section';
import FilterBar from '../components/FilterBar';
import libros from "../data/libros";

export default function Home() {
  return (
    <main className="container mt-5 pt-5">
      <Hero />
      <FilterBar />
      <Section title="Lo más vendido" libros={libros.slice(0, 3)} />
      <Section title="Novedades" libros={libros.slice(3, 5)} />
      <Section title="Recomendados" libros={libros.slice(1, 4)} />
    </main>
  );
}
