import React from 'react';


import Banner from '../Banner/Banner';
import ContractUs from '../ContractUs/ContractUs';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <ContractUs></ContractUs>
        </div>
    );
};

export default Home;