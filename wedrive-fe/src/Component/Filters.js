// src/Component/Filters.js
import React from 'react';
import { Button, Form, Col } from 'react-bootstrap';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filtros</h2>
      <div className="buttons">
        <Button variant="outline-primary" className="m-1">Botón 1</Button>
        <Button variant="outline-primary" className="m-1">Botón 2</Button>
        <Button variant="outline-primary" className="m-1">Botón 3</Button>
        <Button variant="outline-primary" className="m-1">Botón 4</Button>
        <Button variant="outline-primary" className="m-1">Botón 5</Button>
        <Button variant="outline-primary" className="m-1">Botón 6</Button>
      </div>
      <Form>
        <Form.Group controlId="priceRange">
          <Form.Label>Rango de precios</Form.Label>
          <Form.Range />
        </Form.Group>
        <Form.Group controlId="autonomyRange">
          <Form.Label>Rango de autonomía</Form.Label>
          <Form.Range />
        </Form.Group>
        <Form.Group controlId="checkboxGroup">
          <Form.Check type="checkbox" label="Checkbox 1" />
          <Form.Check type="checkbox" label="Checkbox 2" />
          <Form.Check type="checkbox" label="Checkbox 3" />
        </Form.Group>
        <Button variant="primary">Aplicar filtros</Button>
      </Form>
    </div>
  );
};

export default Filters;
