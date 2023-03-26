import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className=" mt-10 p-10 shadow-xl" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className='footer px-12'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>

                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <p>Ahamednagar Mirpur-1</p>
                </div>
            </div>
            <p className='text-center mt-32'>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </footer >
    );
};

export default Footer;