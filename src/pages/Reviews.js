import { Button, Card, Col, Container, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { database } from "../config";
import { toast } from "react-toastify";
import firebase from "firebase";
import NavBar from '../Components/navbar';
import ReadReviews from "../Components/ReadReviews";
import Footer from '../Components/Footer';

export const Reviews = () => {
    const [review, setReview] = useState("");
    const [authState, setAuthState] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [listings, setListings] = useState([]);
    const [arrivalDate, setArrivalDate] = useState("");
    const [departDate, setDepartDate] = useState("");
    const [guests, setGuests] = useState("");
    const [propertyKey, setPropertyKey] = useState("");
    const [hostUid, setHostUid] = useState("");
    const [submit, setSubmit] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [heading, setheading] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [stars, setStars] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [check, changecheck] = useState();

    function handleChange(event) {
        setStars(event.target.value);
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                setAuthState(false);
            } else {
                setAuthState(true);
                setUserUid(user.uid);
                setName(user.displayName);
            }
        });
    }, []);

    const submitReview = (e) => {
        e.preventDefault();
        database.ref("Reviews").push({
            userUid: userUid,
            propertyKey: propertyKey,
            hostUid: hostUid,
            stars: stars,
            review: review,
            name: name,
        });
        toast("Review has been successfully posted", { type: "success" });
        document.getElementById("review-form").reset();
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <NavBar />
            <div
                style={{
                    flex: '1',
                    paddingTop: '5rem', // Add padding to ensure content is below the NavBar
                    paddingBottom: '4rem',
                }}
            >
                <Container>
                    <h1 style={{ textAlign: 'center' }}>Reviews</h1>
                    <Card>
                        <Form onSubmit={submitReview} id="review-form">
                            <Form.Row>
                                <Form.Group
                                    as={Col}
                                    lg={8}
                                    md={8}
                                    sm={12}
                                    controlId="formBasicText"
                                >
                                    <Form.Label>Write Your Review</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Write here..."
                                        required
                                        onChange={(e) => setReview(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    controlId="formBasicText"
                                >
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="category"
                                        onChange={handleChange}
                                    >
                                        <option>Select</option>
                                        <option value="5">5 Star</option>
                                        <option value="4">4 Star</option>
                                        <option value="3">3 Star</option>
                                        <option value="2">2 Star</option>
                                        <option value="1">1 Star</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Button variant="success" type="submit" style={{ marginLeft: "1%" }}>
                                Post Review
                            </Button>
                        </Form>
                        <ReadReviews />
                    </Card>
                </Container>
            </div>
            <Footer />
        </div>
    );
};
