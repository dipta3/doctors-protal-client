import React from 'react';
import chair from '../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero h-96 bg-[url('/src/assets/images/bg.png')]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="rounded-lg w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">We have modern well equipped Operation unit. We use modern technology including  Autoclave Machine, UV Cabinet,  Endodontic Electric Motor, Apex Locator, Intraoral camera  to offer best oral treatment. </p>
                    <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;