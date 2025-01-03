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
import video8 from '../pictures/IMG_0_7.MOV';
import video9 from '../pictures/IMG_0 (1).MOV';
import video10 from '../pictures/copy_6EE25BD2-38C4-47A3-A0AF-E761D8334689.mov';
import video11 from '../pictures/copy_ACE98E58-7875-4775-9F42-588856961AB1.mov'
import video12 from '../pictures/copy_C2DE0353-D65B-4942-9CBB-2B481D83E15B - VEED Export.mov'
import video13 from '../pictures/IMG_3722.mov'
import video14 from '../pictures/IMG_3721 - VEED Export.mp4'
import video15 from '../pictures/copy_B014612D-6926-47F7-8EEC-F299D2075A25.mp4'
import Footer from '../Components/Footer';

export const Proj = [
    {
        title: "LT Rios",
        description: null,
        imageSrc: video1,
        url: "",
    },
    {
        title: "Emelys S",
        description: null,
        imageSrc: video2,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "SSG Evans",
        description: null,
        imageSrc: video3,
        url: "https://github.com/pmhansen8/react-project",
    },
    {
        title: "Damien S",
        description: null,
        imageSrc: video4,
        url: "",
    },
    {
        title: "Msgt Rac",
        description: null,
        imageSrc: video5,
        url: "",
    },
    {
        title: "Gabriel Q",
        description: null,
        imageSrc: video6,
        url: "",
    },
    {
        title: "Msgt Vargas",
        description: null,
        imageSrc: video7,
        url: "",
    },
    {
        title: "LT Ruiz",
        description: null,
        imageSrc: video8,
        url: "",
    },
    {
        title: "LT Chang",
        description: null,
        imageSrc: video9,
        url: "",
    }, {
        title: "Joey",
        description: null,
        imageSrc: video10,
        url: "",
    },
    {
        title: "Juan",
        description: null,
        imageSrc: video11,
        url: "",
    },
    {
        title: "Jenhsen and Kim",
        description: null,
        imageSrc: video12,
        url: "",
    },
    {
        title: "Edward",
        description: null,
        imageSrc: video13,
        url: "",
    },
    {
        title: "Omar",
        description: null,
        imageSrc: video14,
        url: "",
    },
    {
        title: "Teresa",
        description: null,
        imageSrc: video15,
        url: "",
    },

];

export const Testimonies = () => {
    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "6%", paddingBottom: '3rem', paddingTop: '3rem' }}>
                <h1 id="contactme-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>Testimonies</h1>
                <Container style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                    <Row className="justify-content-center">
                        {Proj.map((proj, index) => (
                            <Col xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center" key={index}>
                                <Card style={{ width: '100%', maxWidth: '18rem' }}>
                                    <video width="100%"  height="100%" controls>
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
            <Footer />
        </div>
    );
};
