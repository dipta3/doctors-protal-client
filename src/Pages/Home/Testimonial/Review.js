import React from 'react';

const Review = ({ review }) => {
    const { name, msg, location, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{msg}</p>
                <div className="flex items-center mt-8">
                    <div className="avatar mr-4">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={img} />
                        </div>
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;