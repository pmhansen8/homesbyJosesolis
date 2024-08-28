import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom"; // Import Redirect
import NewNavBar from '../Components/NewNavBar';
import firebase from "firebase";
import { database } from "../config";
import Footer from "../Components/Footer";

export const Messages = () => {
    const [authState, setAuthState] = useState(null);
    const [userUid, setUserUid] = useState(null);
    const [messages, setMessages] = useState([]);
    const [check, setCheck] = useState(true);
    const [shouldRedirect, setShouldRedirect] = useState(false);

    useEffect(() => {
        const authListener = firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                setAuthState(true);
                setUserUid(user.uid);
            } else {
                setAuthState(false);
            }
        });

        // Clean up the listener on component unmount
        return () => authListener();
    }, []);

    useEffect(() => {
        if (authState === false) {
            setShouldRedirect(true);
        }
    }, [authState]);

    useEffect(() => {
        if (authState && userUid) {
            const ref = database.ref("My-Profile");

            const listener = ref.orderByChild("userUid").equalTo(userUid).on('value', (snapshot) => {
                let redirectFlag = false;

                snapshot.forEach((childSnapshot) => {
                    if (childSnapshot.val().email !== "pmhansen8@gmail.com") {
                        redirectFlag = true;
                    }
                });

                if (redirectFlag) {
                    setShouldRedirect(true);
                } else {
                    setCheck(false);
                }
            });

            // Clean up the listener on component unmount
            return () => ref.off('value', listener);
        }
    }, [authState, userUid]);

    useEffect(() => {
        if (authState && !shouldRedirect && userUid) {
            const ref = database.ref("ContactUs");

            const listener = ref.on('value', (snapshot) => {
                const messagesArray = [];
                snapshot.forEach((childSnapshot) => {
                    const messageData = childSnapshot.val();
                    messagesArray.push({
                        id: childSnapshot.key,
                        ...messageData
                    });
                });
                setMessages(messagesArray);
            });

            // Clean up the listener on component unmount
            return () => ref.off('value', listener);
        }
    }, [authState, shouldRedirect, userUid]);

    if (shouldRedirect) {
        return <Redirect to="/" />;
    }

    return (
        check ? <div></div> :
            <div style={{ paddingTop: '4rem' }}>
                <NewNavBar />
                <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem' }}>
                    <h1 id="contactme-section" style={{ textAlign: 'center' }}>Messages</h1>
                    <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '0.375rem' }}>
                        {messages.length === 0 ? (
                            <p style={{ textAlign: 'center' }}>No messages found.</p>
                        ) : (
                            <ul style={{ listStyleType: 'none', padding: 0 }}>
                                {messages.map((message) => (
                                    <li key={message.id} style={{ marginBottom: '1rem', padding: '1rem', borderBottom: '1px solid #ccc' }}>
                                        <p><strong>Name:</strong> {message.name}</p>
                                        <p><strong>Email:</strong> {message.email}</p>
                                        <p><strong>Number:</strong> {message.number}</p>
                                        <p><strong>Message:</strong> {message.comment}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
    );
};
