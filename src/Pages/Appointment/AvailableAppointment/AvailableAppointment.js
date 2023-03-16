import React from 'react';
import PrimayButton from '../../../components/PrimaryButton/PrimayButton';

const AvailableAppointment = ({ appointmentOption }) => {
    const { name, slots } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary text-2xl">{name}</h2>
                <p>{
                    slots.length > 0 ? slots[0] : 'Try Another Day'
                }</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-end">
                    <PrimayButton>Book Appointment</PrimayButton>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;