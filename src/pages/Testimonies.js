import React from 'react';
import NavBar from '../Components/navbar';
import { Card, Container, Row, Col } from "react-bootstrap";
import video1 from '../pictures/IMG_0.MOV';
import video2 from '../pictures/IMG_0_1.MOV';
import video3 from '../pictures/IMG_0_2.MOV';
import video4 from '../pictures/IMG_0_3.MOV';
import video5 from '../pictures/IMG_0_4.MOV';
import video6 from '../pictures/IMG_0_5.MOV';
import video7 from '../pictures/IMG_0_6.MOV';

export const Proj = [
    {
        title: "Alejandro",
        description: null,
        imageSrc: video1,
        url: "",
    },
    {
        title: "",
        description: null,
        imageSrc: video2,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "",
        description: null,
        imageSrc: video3,
        url: "https://github.com/pmhansen8/react-project",
    },
    {
        title: "",
        description: null,
        imageSrc: video4,
        url: "",
    },
    {
        title: "",
        description: null,
        imageSrc: video5,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "Gabriel Q.",
        description: null,
        imageSrc: video6,
        url: "https://github.com/pmhansen8/react-project",
    },
    {
        title: "",
        description: null,
        imageSrc: video7,
        url: "https://github.com/pmhansen8/react-project",
    },
];

export const Testimonies = () => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "6%", paddingBottom: '3rem' }}>
                <Container>
                    <Row className="justify-content-center">
                        {Proj.map((proj, index) => (
                            <Col xs={12} sm={6} md={6} lg={6} className="mb-4 d-flex justify-content-center" key={index}>
                                <Card style={{ width: '18rem' }}> {/* Adjusted width */}
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
            </div>
        </div>
    );
};
