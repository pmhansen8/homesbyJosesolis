import React, { useState } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';

export default function CategoriesSection() {
    const [hoveredCard, setHoveredCard] = useState(false); // Tracks if the card is hovered
    const [hoveredLink, setHoveredLink] = useState(null);  // Tracks which link is hovered

    const baseTextStyle = {
        fontSize: "1.2rem", // Adjust size as needed
        transition: "color 0.3s ease", // Smooth color transition
        display: "inline-flex", // Ensure it aligns with icon
        alignItems: "center",
    };

    const getLinkStyle = (socialMedia) => ({
        ...baseTextStyle,
        textDecoration: "none", // Remove underline
        color: hoveredLink === socialMedia ? "blue" : hoveredCard ? "white" : "black", // White when card is hovered, blue when specific link is hovered, black otherwise
        marginLeft: "0.5rem", // Space between icon and text
    });

    return (
        <div>
            <Container>
                <h2 className="mt-4">Contact Methods</h2>
                <p className="heading-p">Reach out to me through one of the following methods!</p>

                <Row className="mt-5">
                    <Col sm={12} md={4} lg={4}>
                        <Link>
                            <Card className="category-cards text-dark mt-3 text-center">
                                <Card.Body onClick={() => window.location.href = "mailto:jose.solistheflrealtor@gmail.com"} className="cursor-pointer">
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
                                <Card.Text  style={{ fontSize: '1.2rem' }}>407-692-4587</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={4} lg={4}>
                        <Card
                            className="category-cards text-dark mt-3 text-center"
                            onMouseOver={() => setHoveredCard(true)}
                            onMouseOut={() => setHoveredCard(false)}
                        >
                            <Card.Body>
                                <FontAwesomeIcon icon={faShareAlt} size="4x" className="mb-3" />
                                <Card.Title>Social Media</Card.Title>
                                <Card.Text>Follow me on social media.</Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                    <a
                                        href="https://www.instagram.com/therealestatebaron/profilecard/?igsh=MzRlODBiNWFlZA=="
                                        style={getLinkStyle('instagram')}
                                        onMouseOver={() => setHoveredLink('instagram')}
                                        onMouseOut={() => setHoveredLink(null)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        instagram
                                    </a>
                                </Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100000013780842"
                                        style={getLinkStyle('facebook')}
                                        onMouseOver={() => setHoveredLink('facebook')}
                                        onMouseOut={() => setHoveredLink(null)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        facebook
                                    </a>
                                </Card.Text>
                                <Card.Text>
                                    <FontAwesomeIcon icon={faTiktok} className="mr-2" />
                                    <a
                                        href="https://www.tiktok.com/@daniel.solis185?_t=8p5N8adcKVS&_r=1"
                                        style={getLinkStyle('tiktok')}
                                        onMouseOver={() => setHoveredLink('tiktok')}
                                        onMouseOut={() => setHoveredLink(null)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        tiktok
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
