import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../App.css'; // Asegúrate de importar el archivo CSS correcto

const ContactForm = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h2>Contacto</h2>
          <Form>
            <Form.Group as={Row} className="form-group-spacing">
              <Col sm={12} md={6}>
                <Form.Control type="text" placeholder="Nombre" />
              </Col>
              <Col sm={12} md={6}>
                <Form.Control type="tel" placeholder="Teléfono" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="form-group-spacing">
              <Col>
                <Form.Control type="email" placeholder="Email" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="form-group-spacing">
              <Col>
                <Form.Control as="textarea" rows={3} placeholder="Mensaje" />
              </Col>
            </Form.Group>
            <Form.Group className="d-flex justify-content-center">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
