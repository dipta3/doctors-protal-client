import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import ServiceCard from './ServiceCard';
const ServiceCards = () => {
    const serviceCard = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            info: 'Fluoride is a natural mineral that builds strong teeth and prevents cavities. It’s been an essential oral health treatment for decades.',
            img: fluoride
        },
        {
            id: 2,
            name: 'Cavity Filling',
            info: 'The most common use of tooth fillings is to fill a cavity in the tooth. But tooth fillings also can be used to repair damage to teeth caused by teeth grinding (bruxism) or to replace part of a broken tooth.',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            info: 'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.',
            img: whitening
        }
    ]
    return (
        <div className='mt-24'>
            <div className='text-center'>
                <h2 className='text-secondary font-bold text-xl'>OUR SERVICES</h2>
                <p className='text-2xl'>Services We Provide</p>
            </div>
            <div className='px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-20'>
                {
                    serviceCard.map(card => <ServiceCard
                        key={card.id}
                        card={card}
                    ></ServiceCard>)
                }
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl w-1/2" />
                        <div className='w-1/2 px-14'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCards;