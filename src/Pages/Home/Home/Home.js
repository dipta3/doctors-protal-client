import React from 'react';
import ServiceCards from '../../ServiceCards/ServiceCards';

import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';

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