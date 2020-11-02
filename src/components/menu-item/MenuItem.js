import React from 'react';
import { withRouter } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({ title, subtitle, image, history, clean_url, match }) => (
    <article className="menu-item" onClick={() => history.push(`${match.url}${clean_url}`)}>
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

export default withRouter(MenuItem);