import React from 'react';


const AvailableAppointment = ({ appointmentOption, setTreatment }) => {
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
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary"
                        onClick={() => setTreatment(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;