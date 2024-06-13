import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf, faStar as farStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ rate }) => {
    let fullStars = Math.floor(rate);
    let halfStar = (rate % 1) >= 0.5 ? 1 : 0;

    return (
        <div className="ratinstar">
            {Array(fullStars).fill().map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-viz-orange" />
            ))}
            {halfStar ? <FontAwesomeIcon icon={faStarHalf} className="text-viz-orange" /> : null}
        </div>
    );
};

export default RatingStar;
