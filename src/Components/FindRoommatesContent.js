import React from 'react';
import { Card, Container, Col, Row } from "react-bootstrap";
import pic1 from '../pictures/undraw_people_tax5.svg';
import pic2 from '../pictures/undraw_celebration_0jvk.svg';
import pic3 from '../pictures/undraw_fans_gr54.svg';

import { Proj } from '../pages/Testimonies';

export default function FindRoommatesContent() {
    return (
        <section className="find-roommates-content mt-5">
            <Container>
                <h3 className="my-4">Testimonies</h3>
                <Row>
                    {Proj.slice(0, 3).map((proj) => (
                        <Col sm={12} md={4} lg={4} key={proj.title}>
                            <Card style={{ width: '15rem' }}>
                                <video width="100%" controls>
                                    <source src={proj.imageSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <Card.Body>
                                    <Card.Title>{proj.title}</Card.Title>
                                    {proj.description && <Card.Text>{proj.description}</Card.Text>}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
