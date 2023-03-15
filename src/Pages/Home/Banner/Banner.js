import React from 'react';
import chair from '../../../assets/images/chair.png'
import PrimayButton from '../../../components/PrimaryButton/PrimayButton';
const Banner = () => {
    return (
        <div className="hero h-96 bg-[url('/src/assets/images/bg.png')] mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">We have modern well equipped Operation unit. We use modern technology including  Autoclave Machine, UV Cabinet,  Endodontic Electric Motor, Apex Locator, Intraoral camera  to offer best oral treatment. </p>
                    <PrimayButton>GET STARTED</PrimayButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;