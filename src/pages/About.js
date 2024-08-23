import React from "react";
import NavBar from '../Components/navbar'
import jose from '../pictures/jose.jpg'
import Footer from '../Components/Footer'

// Define the content as constants
const greeting = "Hello, I am Jose!";
const bio1 = "About me:";
const bio2 = "I am Jose Solis, originally from Pennsylvania, but made my way to the Sunshine State and never looked back. Making Florida my new home, I have lived here for the past eight (8) years and have no intention of leaving. I love the natural parks, and how easily accessible they are. I also appreciate that there is always a lake to stroll by or how beautiful the landscape is. My favorite area is the cross Seminole Trail, which I typically do through cycling as a great form of exercise or recreation. I earned a bachelor’s degree in Business Management from Rollins College with high honors and have been blessed to serve this great nation for 11 years in the United States Marine Corps.\n" +
    "\n" +
    "While in the Marines, I took with me the values of discipline, dedication, commitment, dependability, integrity, decisiveness, initiative, knowledge, and loyalty. I wish to serve my community, clients, and future generations by combining my experiences and expertise to enable one of the most important financial transactions in their life. My customers and clients can expect nothing less in any capacity I represent them, and I unequivocally pride myself on this.\n" +
    "\n" +
    "As a main part of my background, I have spent nearly 10 years recruiting in the military and corporate sector. Being responsible and accountable for millions of dollars in equipment and lives, I understand the urgency of meeting deadlines, as well as the importance of efficiency in completing the necessary steps while dealing with varying components for one of the biggest purchases of your life. Rest assured, I do not take this responsibility lightly. This has allowed me to look at practical methods which enables me to perform the most effectively at achieving your desired outcome.\n" +
    "\n" +
    "I have always had a passion for real estate; from construction designs, materials and the choices that can be made, to enhance cosmetic improvement, combined with the ability to build long-term value as a homeowner. Real estate possesses an overabundance of benefits to the homeowner, economy, and our society. My dedication to helping and serving others and being a part of a collaborative and supportive environment where everyone helps each other succeed, led me to become a part of eXp Realty LLC. I love leaving a lasting positive impact and there is no greater reward to me than helping you become a homeowner. Homeownership plays a vital role in helping build strong, stable communities and I enjoy being a part of that.\n" +
    "\n" +
    "I have a wonderful family consisting of two (2) gorgeous girls and a beautiful wife. Outside of real estate, I enjoy working on projects within my household. I intend to launch a YouTube channel dedicated to assisting others with beautification projects throughout the home. While I served in the marines developed an affinity for travel, which I still enjoy today. I can initiate a conversation in French, German, Italian and Japanese and I love learning about geography and history. You can also find me in a museum, learning about cultures and people.\n" +
    "\n" +
    "Buying or selling a home can be a complicated process, but I am here to ease that burden, while educating and keeping you informed every step of the way. Reach out to me, let's schedule an appointment. I look forward to helping you fulfill your real estate needs." ;



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
            paddingTop: '20rem',

        }}
    >
        <NavBar></NavBar>
        <img
            src={jose}
            style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginTop: '55%'
            }}
        />
        <h1 style={{fontSize: '2.5rem', margin: '1rem 0'}}>
            {greeting}
        </h1>
        <h2 style={{fontSize: '1.5rem', margin: '0.5rem 0', color: 'black'}}>
            {bio1}
        </h2>
        <p style={{fontSize: '1rem', lineHeight: '1.5', margin: '0.5rem 0'}}>
            {bio2}
        </p>
        <h2 style={{fontSize: '1.5rem', margin: '0.5rem 0', color: 'black'}}>
            Experience:
        </h2>
        <p style={{fontSize: '1rem', lineHeight: '1.5', margin: '0.5rem 0'}}>
            3 years 11 months
        </p>
        <h2 style={{fontSize: '1.5rem', margin: '0.5rem 0', color: 'black'}}>
            Price range (last 24 months):
        </h2>
        <p style={{fontSize: '1rem', lineHeight: '1.5', margin: '0.5rem 0'}}>
            $389K - $389K
        </p>
        <h2 style={{fontSize: '1.5rem', margin: '0.5rem 0', color: 'black'}}>
            Areas served:
        </h2>
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)', // 2 columns
                gap: '1rem',
                width: '100%', // Adjust width as needed
                maxWidth: '600px', // Maximum width of the grid container
                textAlign: 'center',
            }}
        >
            <p>Altamonte Springs</p>
            <p>Apopka</p>
            <p>Casselberry</p>
            <p>Central Florida</p>
            <p>Geneva</p>
            <p>Gotha</p>
            <p>Kissimmee</p>
            <p>Lake Mary</p>
            <p>Longwood</p>
            <p>Montverde</p>
            <p>Oak Hill</p>
            <p>Ocoee</p>
            <p>Orlando</p>
            <p>Oviedo</p>
            <p>Sanford</p>
            <p>Winter Garden</p>
            <p>Winter Park</p>
            <p>Winter Springs</p>
        </div>
<h2 style={{fontSize: '1.5rem', margin: '0.5rem 0', color: 'black'}}>
    Spoken Languages:
</h2>
<p style={{fontSize: '1rem', lineHeight: '1.5', margin: '0.5rem 0', paddingBottom: '3rem'}}>
    English & Spanish

</p>

<Footer ></Footer>
</div>
)
;

