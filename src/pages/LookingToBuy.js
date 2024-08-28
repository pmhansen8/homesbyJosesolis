import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faCircleUser, faG } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from "uuid";
import firebase from 'firebase';
import { database } from "../config";
import NewNavBar from '../Components/NewNavBar';

export default function LookingToBuy() {
    const [authState, setAuthState] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [profileData, setProfileData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [check, setCheck] = useState(false);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setAuthState(true);
                setUserUid(user.uid);
            } else {
                setAuthState(false);
            }
        });
    }, []);

    useEffect(() => {
        if (userUid) {
            database.ref("My-Profile").orderByChild("homeSearch").equalTo("Yes").on('value', (snapshot) => {
                const items = [];

                snapshot.forEach((childSnapshot) => {




                    const childData = childSnapshot.val();
                    console.log(childData)
                    items.push(childData);
                });
                setProfileData(items);
                setLoading(false);
            });
        }
    }, [userUid]);

    useEffect(() => {
        if (!userUid) return;

        const ref = database.ref("My-Profile");

        ref.orderByChild("userUid").equalTo(userUid).on('value', (snapshot) => {
            let shouldRedirect = false;

            snapshot.forEach((childSnapshot) => {
                if (childSnapshot.val().email !== "pmhansen8@gmail.com") {
                    shouldRedirect = true;
                }
            });

            if (shouldRedirect) {
                setShouldRedirect(true);
            }
        });

        return () => ref.off(); // Clean up the listener on component unmount
    }, [userUid]);

    if (loading) {
        return <div className="spinner-border spinner text-primary"></div>;
    }

    if (authState === false) {
        return <Redirect to="/" />;
    }
    if (shouldRedirect) {
        return <Redirect to="/" />;
    }

    console.log(profileData)

    return (
        <div>
            <NewNavBar />
            {profileData.length === 0 ? (
                <div className="text-center mt-5">No profiles found.</div>
            ) : (
                profileData.map((data) => (
                    <Jumbotron className="mt-5" key={uuidv4()}>
                        <Row>
                            <Col sm={12} lg={2} md={2}>
                                <img src={data.thumbnail} className="img-fluid img-thumbnail profile-picture" alt="Profile" />
                            </Col>
                            <Col sm={12} lg={10} md={10}>
                                <h1 className="display-4">{data.name}</h1>
                                <p className="lead"><FontAwesomeIcon icon={faMapMarkerAlt} /> {data.city}</p>
                                <p><FontAwesomeIcon icon={faEnvelope} /> {data.email}</p>
                                <p><FontAwesomeIcon icon={faCircleUser} /> {data.age}</p>
                                <p><FontAwesomeIcon icon={faG} /> {data.gender}</p>
                                <hr className="my-2" />
                                <p>I’m searching for homes</p>
                            </Col>
                        </Row>
                        <div className="d-flex justify-content-end">
                            <Link to="/change-profile">
                                <Button>Update Profile</Button>
                            </Link>
                        </div>
                    </Jumbotron>
                ))
            )}
        </div>
    );
}