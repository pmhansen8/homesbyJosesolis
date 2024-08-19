import React from "react";
import NavBar from '../Components/navbar'

// Define the content as constants
const greeting = "Hello, I am Jose!";
const bio1 = "About me:";
const bio2 = "" ;



export const About = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            height: '100vh',
            textAlign: 'center',
            padding: '2rem',
        }}
    >
        <NavBar></NavBar>
        <img

            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
            }}
        />
        <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>
            {greeting}
        </h1>
        <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' , color: 'black'}}>
            {bio1}
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', margin: '0.5rem 0' }}>
            {bio2}
        </p>
    </div>
);

