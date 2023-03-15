import React from 'react';

const InfoCard = ({ card }) => {
    const { name, info, img, bgClass } = card
    return (
        <div className={`card card-side ${bgClass}  shadow-xl p-6`}>
            <figure><img src={img} alt="Movie" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;