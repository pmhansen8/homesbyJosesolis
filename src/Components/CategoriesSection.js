import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faShareAlt,  } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
    faFacebook,
    faTiktok

} from "@fortawesome/free-brands-svg-icons"
import {Link} from 'react-router-dom'



export default function CategoriesSection() {
  return (
      <div>
        <Container>
          <h2 className="mt-4">Contact Methods</h2>
          <p className="heading-p">Reach out to me through one of the following methods!</p>

          <Row className="mt-5">
            <Col sm={12} md={4} lg={4}>
              <Link>
              <Card className="category-cards text-dark mt-3 text-center">
              <Card.Body onClick={() => window.location.href = "mailto:jose.solistheflrealtor@gmail.com"}   className="cursor-pointer">
                <FontAwesomeIcon icon={faEnvelope} size="4x" className="mb-3" />
                <Card.Title>Email</Card.Title>
                <Card.Text>Contact me via email.</Card.Text>
                <Card.Text>jose.solistheflrealtor@gmail.com</Card.Text>
              </Card.Body>
            </Card>
              </Link>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Card className="category-cards text-dark mt-3 text-center">
                <Card.Body>
                  <FontAwesomeIcon icon={faPhone} size="4x" className="mb-3" />
                  <Card.Title>Phone</Card.Title>
                  <Card.Text>Give me a call.</Card.Text>
                  <Card.Text>407-692-4587</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4} lg={4}>
              <Card className="category-cards text-dark mt-3 text-center">
                <Card.Body>
                  <FontAwesomeIcon icon={faShareAlt} size="4x" className="mb-3" />
                  <Card.Title>Social Media</Card.Title>
                  <Card.Text>Follow me on social media.</Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
instagram
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                    instagram
                  </Card.Text>
                  <Card.Text>
                    <FontAwesomeIcon icon={faTiktok} className="mr-2" />
                    instagram
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
}
