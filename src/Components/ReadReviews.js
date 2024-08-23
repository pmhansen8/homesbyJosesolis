import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import { database } from "../config";

export default function ReadReviews() {
    const [reviews, setReviews] = useState([]);
    const [userUid, setUserUid] = useState(null);

    useEffect(() => {
        // Get the authenticated user's UID
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setUserUid(user.uid);
            }
        });

        // Fetch reviews from the database
        database
            .ref("Reviews")
            .on("value", (snapshot) => {
                const items = [];
                snapshot.forEach((childSnapshot) => {
                    var data = childSnapshot.val();
                    items.push({
                        key: childSnapshot.key, // Store the unique key of the review
                        name: data.name,
                        review: data.review,
                        stars: data.stars,
                        userUid: data.userUid, // Store the UID of the user who posted the review
                    });
                });
                setReviews(items);
            });
    }, []);

    const deleteReview = (reviewKey) => {
        // Remove the review from the database using the review's key
        database.ref(`Reviews/${reviewKey}`).remove();
    };

    return (
        <>
            <Container>
                <h4>Reviews:</h4>
                <Row>
                    {reviews.map((data) => (
                        <Col sm={12} md={12} lg={12} key={uuidv4()}>
                            <Card className="mt-2">
                                <Card.Body>
                                    <Card.Title className="text-dark">
                                        {data.name}
                                    </Card.Title>
                                    <span className="">
                                        {Array.from({ length: data.stars }, (_, index) => (
                                            <FontAwesomeIcon key={index} icon={faStar} />
                                        ))}
                                    </span>
                                    <Card.Text className="text-dark">
                                        {data.review}
                                    </Card.Text>
                                    {data.userUid === userUid && (
                                        <Button
                                            variant="danger"
                                            onClick={() => deleteReview(data.key)}
                                        >
                                            Delete
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <br />
            <br />
        </>
    );
}
