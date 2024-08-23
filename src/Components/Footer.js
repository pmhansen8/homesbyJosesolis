import React from 'react';
import photo from '../pictures/LRLN Logo 2022 Layers - Corp Guidlines_LRLN Logo 2022 - Blue Stacked.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <>
            <footer className="mt-5 text-center footer" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 2rem'
            }}>
                <div>© Copyright La Rosa Realty</div>
                <img src={photo} alt="La Rosa Realty Logo"/>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }}>
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '0.5rem'}}>
                        <FontAwesomeIcon icon={faPhone} style={{marginRight: '0.5rem'}}/>
                        <span>407-692-4587</span>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <FontAwesomeIcon icon={faEnvelope} style={{marginRight: '0.5rem'}}/>
                        <span>jose.solistheflrealtor@gmail.com</span>
                    </div>
                </div>
                <style jsx>{`
                    @media (max-width: 768px) {
                        .footer {
                            flex-direction: column;
                            align-items: center;
                        }

                        .footer-logo {
                            margin-bottom: 1rem; /* Add space below the logo */
                        }

                        .footer-contact {
                            align-items: center;
                        }
                    }
                `}</style>
            </footer>
        </>
    );
}
