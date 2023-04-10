import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faWrench, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const ServicesCards = () => {
  const cardsData = [
    {
      title: 'Servicio 1',
      icon: faRocket,
      text: 'Este es el texto del servicio 1.',
    },
    {
      title: 'Servicio 2',
      icon: faWrench,
      text: 'Este es el texto del servicio 2.',
    },
    {
      title: 'Servicio 3',
      icon: faLightbulb,
      text: 'Este es el texto del servicio 3.',
    },
  ];

  return (
    <Container>
      <h2 className="text-center mb-4">Título de las cartas</h2>
    <Row>
      {cardsData.map((card, index) => (
        <Col key={index} xs={12} md={4} className="mb-4">
          <Card className="text-center">
            <Card.Body className="d-flex flex-column align-items-center">
              <div className="mb-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', background: '#007bff'}}>
                <FontAwesomeIcon icon={card.icon} size="2x" color="white" />
              </div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
              <Button variant="primary">Botón</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export default ServicesCards;

