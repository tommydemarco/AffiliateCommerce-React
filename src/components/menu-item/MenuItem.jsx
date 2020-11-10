import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.styles.scss';    

                //USING withRouter HOC you have access to routing property (history, match)
const MenuItem = ({ title, subtitle, imageUrl, history, linkUrl, match }) => {
    return (
    <article className="menu-item" onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-container"  style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className="content">
            <h2 className="title">{ title }</h2>
            
            <p className="subtitle">{ subtitle }</p>
        </div>
    </article>
    )
}

                //withRouter HOC, returns a superpowered component 
export default withRouter(MenuItem);