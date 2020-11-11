import React from 'react';
import './TheSpinner.styles.scss'

const TheSpinner = () => {
    return (
        <div className="the-spinner">
            <div className="the-spinner__container">
                <svg className="the-spinner__icon">
                    <use xlinkHref="/assets/svg/sprite.svg#icon-spinner9"></use>
                </svg>
            </div> 
        </div>
    );
}

export default TheSpinner;
