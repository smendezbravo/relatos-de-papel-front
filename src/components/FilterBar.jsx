import React from "react";
import { Row, Col, Form } from "react-bootstrap";

export default function FilterBar() {
  return (
    <Row className="mb-4">
      <Col md={4}>
        <Form.Control type="text" placeholder="Buscar por autor..." />
      </Col>
      <Col md={4}>
        <Form.Control as="select">
          <option>Todos los géneros</option>
          <option>Fantasía</option>
          <option>Romance</option>
        </Form.Control>
      </Col>
      <Col md={4}>
        <Form.Control as="select">
          <option>Ordenar por</option>
          <option>Precio: menor a mayor</option>
          <option>Precio: mayor a menor</option>
        </Form.Control>
      </Col>
    </Row>
  );
}

