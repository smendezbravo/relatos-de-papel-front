import BookCard from './BookCard';

export default function Section({ title, libros }) {
  return (
    <section className="my-5">
      <h2 className="mb-4">{title}</h2>
      <div className="row">
        {libros.map(libro => (
          <BookCard
            key={libro.id}
            id={libro.id}
            title={libro.titulo}
            author={libro.autor}
            image={libro.imagen}
            price={libro.precio}
          />
        ))}
      </div>
    </section>
  );
}
