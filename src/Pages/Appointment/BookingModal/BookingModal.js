import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')

    const { user } = useContext(AuthContext)
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const fullName = form.fullName.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: fullName,
            slot,
            phone,
            email,
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed');
                    refetch();
                }
                else {
                    toast.error(data.message)
                }
            })


    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-10' onSubmit={handleBooking}>
                        <input type="text" value={date} className="input input-bordered w-full" disabled />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="text" defaultValue={user?.displayName} disabled name='fullName' placeholder="Full Name" className="input input-bordered w-full" required />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="Email" className="input input-bordered w-full" required />

                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full" required />

                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;