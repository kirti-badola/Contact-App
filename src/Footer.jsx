import React from 'react';
import './index.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="fixed-bottom">
                <p className="text-center">copyright&copy; <span id="Footer">{year}</span> Designed and Developed by Kirti Badoula</p>
            </footer>   
        </>
    )
}

export default Footer;
