import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ rate }) => {
    const totalStars = 5;
    let fullStars = Math.floor(rate);
    let halfStar = (rate % 1) >= 0.5 ? 1 : 0;
    let emptyStars = totalStars - fullStars - halfStar;

    return (
        <div className="ratinstar">
            {Array(fullStars).fill().map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-viz-orange" />
            ))}
            {halfStar ? <FontAwesomeIcon icon={faStarHalfAlt} className="text-viz-orange" /> : null}
            {Array(emptyStars).fill().map((_, i) => (
                <FontAwesomeIcon key={i} icon={farStar} className="text-gray-400" />
            ))}
        </div>
    );
};

export default RatingStar;
