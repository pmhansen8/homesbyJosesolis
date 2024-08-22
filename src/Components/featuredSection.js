import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  Card,
  Button,
  Container,
  Modal,
  handleClose,
  show,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faShower,
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";
import { auth, database } from "../config";
import jose from '../pictures/jose.png';

export default function MyListings() {
  const [authState, setAuthState] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [listingsCheck, setListingsCheck] = useState(null);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) {
        setAuthState(false);
      } else {
        setAuthState(true);
        setUserUid(user.uid);
      }
    });
  }, []);

  useEffect(() => {
    database
        .ref("properties")
        .once("value", (snapshot) => {
          if (snapshot.exists()) {
            setListingsCheck(true);
            setLoading(false);
          } else {
            setListingsCheck(false);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error);
        });
  }, [userUid]);

  useEffect(() => {
    database
        .ref("properties")
        .limitToLast(3)
        .on("value", (snapshot) => {
          const items = [];
          snapshot.forEach((childSnapshot) => {
            var childKey = childSnapshot.key;
            var data = childSnapshot.val();
            items.push({
              key: childKey,
              title: data.title,
              imageOneURL: data.imageOneURL,
              bedrooms: data.bedrooms,
              bathrooms: data.bathrooms,
              city: data.city,
              per_night: data.per_night,
            });
          });
          setListings(items);
        });
  }, [userUid]);

  return (
      <>
        {loading ? (
            <div className="sk-cube-grid">
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
        ) : (
            <Container className="text-center p-5">
              <Row className="align-items-center">
                <Col md={6}>
                  <img
                      src={jose}
                      alt="New home"
                      className="img-fluid rounded-circle"
                  />
                </Col>
                <Col md={6}>
                  <h2>Are you ready to find your new home?</h2>
                </Col>
              </Row>
            </Container>
        )}
      </>
  );
}
