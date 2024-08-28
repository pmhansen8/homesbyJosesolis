import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import NewNavBar from '../Components/NewNavBar';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import { database } from "../config";


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const AgeGraph = () => {
    const [age18, setAge18] = useState(0);
    const [age31, setAge31] = useState(0);
    const [age41, setAge41] = useState(0);
    const [age51, setAge51] = useState(0);
    const [age61, setAge61] = useState(0);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    const [check, setCheck] = useState(true);
    const [userUid, setUserUid] = useState(null);
    const [authState, setAuthState] = useState(null);

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

    useEffect(() => {
        if (!userUid) return;

        const ref = database.ref("My-Profile");

        ref.on('value', (snapshot) => {
            let age18Count = 0;
            let age31Count = 0;
            let age41Count = 0;
            let age51Count = 0;
            let age61Count = 0;

            snapshot.forEach((childSnapshot) => {
                const age = childSnapshot.val().age;

                if (age >= 18 && age <= 30) {
                    age18Count++;
                } else if (age >= 31 && age <= 40) {
                    age31Count++;
                } else if (age >= 41 && age <= 50) {
                    age41Count++;
                } else if (age >= 51 && age <= 60) {
                    age51Count++;
                } else if (age >= 61) {
                    age61Count++;
                }
            });

            setAge18(age18Count);
            setAge31(age31Count);
            setAge41(age41Count);
            setAge51(age51Count);
            setAge61(age61Count);


            setCheck(false);
        });

        return () => ref.off();
    }, [userUid]);


    if (authState === false) {
        return <Redirect to="/" />;
    }
    if (shouldRedirect) {
        return <Redirect to="/" />;
    }

    const data = {
        labels: ['18-30', '31-40', '41-50', '51-60', '61+'],
        datasets: [
            {
                label: 'Age',
                data: [age18, age31, age41, age51, age61],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Age Data',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        check ? (
            <div></div>
        ) : (
            <div>
                <NewNavBar />
                <div style={{ width: '60%', margin: '0 auto', paddingTop: '5%' }}>
                    <Bar data={data} options={options} />
                </div>
            </div>
        )
    );
};

export default AgeGraph;
