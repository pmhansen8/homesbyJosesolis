import React from 'react'
import { Card, Container, Col, Row, Button} from "react-bootstrap";
import pic1 from '../pictures/undraw_people_tax5.svg'
import pic2 from '../pictures/undraw_celebration_0jvk.svg'
import pic3 from '../pictures/undraw_fans_gr54.svg'

export default function FindRoommatesContent() {
    return (
        <section className="find-roommates-content mt-5">
        <Container>
        <h3 className="my-4">Testimonies</h3>
            <Row>
        <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic1} className="find-roommates-content-cards-pic"/>
            <Card.Body>
              <Card.Title>Hailey & John</Card.Title>
              <Card.Text>Amazing and quick service
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top" src={pic2} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Joseph</Card.Title>
              <Card.Text>
              Got house way below market value
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col sm={12} md={4} lg={4}>
          <Card className="find-roommates-content-cards text-dark mt-3">
            <Card.Img variant="top"  src={pic3} className="find-roommates-content-cards-pic" />
            <Card.Body>
              <Card.Title>Sarah</Card.Title>
              <Card.Text>
              Buying a home was a struggle until Jose came along
              </Card.Text>
            </Card.Body>
          </Card>          
          </Col>
          </Row>
        </Container>
        </section>
    )
}
