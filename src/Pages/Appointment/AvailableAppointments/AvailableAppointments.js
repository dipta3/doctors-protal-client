import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOptions(data))
    }, [])
    return (
        <section className='my-16'>
            <p className='text-center font-bold text-xl text-secondary'>Available Services on April {format(selectedDate, 'PP')}</p>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    appointmentOptions.map(appointmentOption => <AvailableAppointment
                        key={appointmentOption._id}
                        appointmentOption={appointmentOption}
                        setTreatment={setTreatment}
                    ></AvailableAppointment>)
                }
            </div>
            {treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;