import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import {Link} from "react-router-dom";
import personalRoomsPic from '../pictures/personal-rooms.jpg'
import familyApartments from '../pictures/family-apartments.jpg'
import villas from '../pictures/villas.jpg'

export default function CategoriesSection() {
  return (
    <div>
      <Container>
      <h2 className="mt-4">Live Anywhere</h2>
      <p className="heading-p">EXPLORE OUR SELECTION OF THE BEST PLACES</p>
    
        <Row className="mt-5">
        <Col sm={12} md={4} lg={4}>
          <Link to="/personal-rooms"><Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={personalRoomsPic} className="category-img"/>
            <Card.Body>
              <Card.Title>Orlando Homes</Card.Title>
              <Card.Text>
                Orlando Homes
              </Card.Text>
            </Card.Body>
          </Card></Link>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Link to="/family-apartments"><Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={familyApartments} className="category-img"/>
            <Card.Body>
              <Card.Title>Kissimmee Homes</Card.Title>
              <Card.Text>
              Kissimmee Homes
              </Card.Text>
            </Card.Body>
          </Card></Link>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Link to="/vacation-villas"><Card className="category-cards text-dark mt-3">
            <Card.Img variant="top" src={villas} className="category-img"/>
            <Card.Body>
              <Card.Title>Altamonte</Card.Title>
              <Card.Text>
              Altamonte homes
              </Card.Text>
            </Card.Body>
          </Card></Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
