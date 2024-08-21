import NavBar from '../Components/navbar';
import { Button, Card, Container } from "react-bootstrap";
import video1 from '../pictures/IMG_0.MOV';
import video2 from '../pictures/IMG_0_1.MOV';
import video3 from '../pictures/IMG_0_2.MOV';
import video4 from '../pictures/IMG_0_3.MOV';
import video5 from '../pictures/IMG_0_4.MOV';
import video6 from '../pictures/IMG_0_5.MOV';
import video7 from '../pictures/IMG_0_6.MOV';

const Proj = [
    {
        title: "Alejandro",
        description: null,
        imageSrc: video1,
        url: "",
    },
    {
        title: "",
        description:
           null,
        imageSrc: video2,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "",
        description:
           null,
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
        description:
            null,
        imageSrc: video5,
        url: "https://github.com/pmhansen8/JAVA",
    },
    {
        title: "Gabriel Q.",
        description:
            null,
        imageSrc: video6,
        url: "https://github.com/pmhansen8/react-project",
    },
    {
        title: "",
        description:
            null,
        imageSrc: video7,
        url: "https://github.com/pmhansen8/react-project",
    },

];

export const Testimonies = () => {

    return (
        <div>
            <NavBar />
            <div style={{ marginTop: "6%", paddingBottom: '3rem' }}>
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, 1fr)",
                            gridGap: "40px",
                        }}
                    >
                        {Proj.map((proj) => (
                            <Card key={proj.title} style={{ width: '24rem' }}>
                                <video width="100%" controls>
                                    <source src={proj.imageSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <Card.Body>
                                    <Card.Title>{proj.title}</Card.Title>
                                    {proj.description && <Card.Text>{proj.description}</Card.Text>}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};
