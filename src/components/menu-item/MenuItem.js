import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ title, subtitle, image }) => (
    <article className="menu-item">
        <div className="background-container"  style={{
                backgroundImage: `url(${image})`
            }}>
        </div>
        <div className="content">
            <h2 className="title">{ title }</h2>
            
            <p className="subtitle">{ subtitle }</p>
        </div>
    </article>
)

export default MenuItem;