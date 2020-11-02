import React from 'react';
import './ContentContainer.styles.scss';

const ContentContainer = (props) => (
    <div className="content-container">
        {props.children}
    </div>
)

export default ContentContainer;