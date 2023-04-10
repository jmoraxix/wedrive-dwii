// src/Component/VehiclesForSale.js
import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const VehiclesForSale = () => {
  const vehiclesData = [
    {
      title: "Vehículo 1",
      text1: "Texto 1",
      text2: "Texto 2",
      text3: "Texto 3",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Vehículo 2",
      text1: "Texto 4",
      text2: "Texto 5",
      text3: "Texto 6",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Vehículo 3",
      text1: "Texto 4",
      text2: "Texto 5",
      text3: "Texto 6",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Vehículo 4",
      text1: "Texto 4",
      text2: "Texto 5",
      text3: "Texto 6",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Vehículo 5",
      text1: "Texto 4",
      text2: "Texto 5",
      text3: "Texto 6",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Vehículo 6",
      text1: "Texto 4",
      text2: "Texto 5",
      text3: "Texto 6",
      imageUrl: "https://via.placeholder.com/150"
    },
    // Agrega más objetos de vehículos aquí
  ];

  const renderCards = () => {
    return vehiclesData.map((vehicle, index) => (
      <Col lg={4} md={6} sm={12} key={index}>
        <Card className="mb-4">
          <Card.Img variant="top" src={vehicle.imageUrl} />
          <Card.Body>
            <Card.Title>{vehicle.title}</Card.Title>
            <Card.Text>{vehicle.text1}</Card.Text>
            <Card.Text>{vehicle.text2}</Card.Text>
            <Card.Text>{vehicle.text3}</Card.Text>
            <Button variant="primary">Botón</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Row>
      {renderCards()}
    </Row>
  );
};

export default VehiclesForSale;
