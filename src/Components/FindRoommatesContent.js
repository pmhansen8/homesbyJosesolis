import React from 'react';
import { Card, Container, Col, Row } from "react-bootstrap";
import { Proj } from '../pages/Testimonies';

export default function FindRoommatesContent() {
    return (
        <section className="find-roommates-content mt-5">
            <Container>
                <h3 className="my-4 text-center">Testimonies</h3>
                <Row className="justify-content-center">
                    {Proj.slice(0, 3).map((proj) => (
                        <Col
                            sm={12}
                            md={6}
                            lg={4}
                            key={proj.title}
                            className="d-flex justify-content-center mb-4"
                        >
                            <Card style={{ width: '100%', maxWidth: '18rem' }}>
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
