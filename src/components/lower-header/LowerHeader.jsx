import React from 'react';
import './LowerHeader.styles.scss'

const LowerHeader = () => {
    return (
        <div className="lower-header">
            <div className="lower-header__container">
                <form className="lower-header__form">
                    <input type="text" className="lower-header__input"/>
                </form>
                <ul className="lower-header__list">
                    <li className="lower-header__icon"></li>
                    <li className="lower-header__icon"></li>
                    <li className="lower-header__icon"></li>
                </ul>
            </div>
        </div>
    );
}

export default LowerHeader;
