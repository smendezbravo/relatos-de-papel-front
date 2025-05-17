import Hero1 from '../components/Hero1';
import Section from '../components/Section';
import FilterBar from '../components/FilterBar';
import libros from "../data/libros";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Hero1 />

      {/* Sección de promociones */}
      <Container fluid className="bg-warning py-4 text-center text-dark">
        <h4>📚 ¡Envío GRATIS en TODOS los libros! 📚</h4>
        <p>Válido hasta el 13 de mayo del 2025</p>
        <Button variant="dark">Ver promociones</Button>
      </Container>

      {/* Sección de libros más vendidos */}
      <Container className="py-5">
        <h3 className="mb-4 border-bottom pb-2">📈 Libros Más Vendidos</h3>
        <Row className="g-4">
          {libros.slice(0, 6).map((libro) => (
            <Col key={libro.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={libro.imagen}
                  alt={libro.titulo}
                  style={{ height: '300px', objectFit: 'cover' }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{libro.titulo}</Card.Title>
                  <Card.Text className="text-muted">{libro.autor}</Card.Text>
                  <Card.Text>
                    <strong>${libro.precio.toLocaleString()}</strong>
                  </Card.Text>
                  <Button variant="primary" className="mt-auto w-100">
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

