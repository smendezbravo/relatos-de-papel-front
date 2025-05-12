import { useParams } from "react-router-dom";
import BookInformation from "../components/BookInformation";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detalles del libro</h1>
      <BookInformation />
    </div>
  );
}
