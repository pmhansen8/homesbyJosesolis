import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jose from '../pictures/jose.jpg';
import Vdo from '../pictures/video-background.mp4';
import Thumbnail from '../pictures/cover.jpg';

export default function HeroSection() {
    return (
        <div className="hero-section" style={{ position: 'relative', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <video autoPlay loop muted poster={Thumbnail} style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: "-1" }}>
                <source src={Vdo} type="video/mp4"></source>
            </video>

            <Container className="text-center text-light" style={{ zIndex: '1' }}>
                <Row className="align-items-center justify-content-center">
                    <Col lg={6} md={12} sm={12} className="mb-4">
                        <h1 className="hero-text">Hey! My name is Jose, the Realtor Baron.</h1>
                    </Col>

                    <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
                        <img src={jose} className="img-fluid rounded-circle" alt="hero-img" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
