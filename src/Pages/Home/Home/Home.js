import React from 'react';


import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import ServiceCards from '../ServiceCards/ServiceCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <ServiceCards></ServiceCards>
            <MakeAppoinment></MakeAppoinment>
        </div>
    );
};

export default Home;