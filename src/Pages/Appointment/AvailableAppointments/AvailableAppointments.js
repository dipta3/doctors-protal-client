import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section>
            <p className='text-center font-bold text-xl text-secondary mt-16'>Available Services on April {format(selectedDate, 'PP')}</p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointment
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                    ></AvailableAppointment>)
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;