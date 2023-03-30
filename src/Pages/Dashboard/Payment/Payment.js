import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckOut from './CheckOut';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)
const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold'>Payment for {treatment}</h2>
            <p className='text-xl my-2 text-secondary'>Please Pay <strong>${price}</strong> for you appointment on {appointmentDate} at {slot}</p>

            <div className='w-96 my-6'>
                <Elements stripe={stripePromise}>
                    <CheckOut
                        booking={booking}
                    ></CheckOut>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;