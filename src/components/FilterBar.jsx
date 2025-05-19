import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import "../styles/FilterBar.css"; // Importa el CSS personalizado

export default function FilterBar({
  search,
  genre,
  order,
  onSearchChange,
  onGenreChange,
  onOrderChange,
  genresList,
  onClearFilters
}) {
  return (
    <Row className="mb-4 align-items-end">
      <Col md={4}>
        <Form.Control
          type="text"
          placeholder="Buscar por titulo..."
          value={search}
          onChange={e => onSearchChange(e.target.value)}
        />
      </Col>
      <Col md={4}>
        <Form.Control as="select" value={genre} onChange={e => onGenreChange(e.target.value)}>
          <option value="">Todos los géneros</option>
          {genresList.map(g => (
            <option key={g} value={g}>{g}</option>
          ))}
        </Form.Control>
      </Col>
      <Col md={3}>
        <Form.Control as="select" value={order} onChange={e => onOrderChange(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
        </Form.Control>
      </Col>
      <Col md={1}>
        <Button
          variant="danger"
          className="w-100 filterbar-clear-btn"
          onClick={onClearFilters}
          title="Quitar filtros"
        >
          <i className="bi bi-x-square"></i>
        </Button>
      </Col>
    </Row>
  );
}