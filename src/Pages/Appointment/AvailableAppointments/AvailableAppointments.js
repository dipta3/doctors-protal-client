import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectedDate }) => {

    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentOptions')
            const data = await res.json()
            return data
        }
    })

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
                    setTreatment={setTreatment}
                ></BookingModal>}
        </section>
    );
};

export default AvailableAppointments;