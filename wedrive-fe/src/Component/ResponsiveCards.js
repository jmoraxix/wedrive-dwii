import React from 'react';
import { Card, CardGroup, Container, Row, Col, Button } from 'react-bootstrap';

const ResponsiveCards = () => {
  const cardsData = [
    {
      title: 'Tarjeta 1',
      imgSrc: 'https://via.placeholder.com/150',
      text: 'Este es el texto de la tarjeta 1.',
    },
    {
      title: 'Tarjeta 2',
      imgSrc: 'https://via.placeholder.com/150',
      text: 'Este es el texto de la tarjeta 2.',
    },
    {
      title: 'Tarjeta 3',
      imgSrc: 'https://via.placeholder.com/150',
      text: 'Este es el texto de la tarjeta 3.',
    },
    {
      title: 'Tarjeta 4',
      imgSrc: 'https://via.placeholder.com/150',
      text: 'Este es el texto de la tarjeta 4.',
    },
  ];

  return (
    <Container>
       <h2 className="text-center mb-4">Título de las cartas</h2>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <CardGroup>
              <Card>
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Img src={card.imgSrc} />
                  </Col>
                  <Col xs={12} md={6}>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Button variant="primary">Botón</Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ResponsiveCards;
