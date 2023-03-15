import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
import PrimayButton from '../../../components/PrimaryButton/PrimayButton';
const MakeAppoinment = () => {
    return (
        <section className='mt-32'
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='doc' src={doctor} className="-mt-28 lg:w-1/2 rounded-lg hidden md:block" />
                    <div>
                        <p className='text-secondary font-bold mb-8'>Appointment</p>
                        <h1 className="text-4xl text-white font-bold mb-8">Make an appointment Today</h1>
                        <p className="py-6 text-white text-sm">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimayButton></PrimayButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;