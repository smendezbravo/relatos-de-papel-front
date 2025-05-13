import { useParams } from "react-router-dom";
import BookInformation from "../components/BookInformation";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del libro</h1>
      <BookInformation
        BookTitle="El nombre del viento"
        BookAuthor="Patrick Rothfuss"
        BookPrice="$19.99"
        BookDescription="El nombre del viento es una novela de fantasía escrita por Patrick Rothfuss. La historia sigue a Kvothe, un joven prodigio que se convierte en un legendario héroe y músico."
        BookImage=""
        BookYear="2007"
      />
    </div>
  );
}
