import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <header className='my-6'>
            <div className="hero bg-[url('/src/assets/images/bg.png')]">
                <div className="hero-content flex-col lg:flex-row-reverse justify-between">
                    <img alt='' src={chair} className="rounded-lg lg:w-1/2 shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}

                        ></DayPicker>
                        <p className='text-center font-bold'>You have selected date: {format(selectedDate, 'PP')}</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;