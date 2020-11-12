import React from 'react'
import './UpperFooter.styles.scss'

const UpperFooter = () => {
    return (
        <section class="upper-footer">
            <h2 class="upper-footer__title"></h2>
            <div class="upper-footer__container">
                <UpperFooterItem 
                    subtitle="Fast delivery" 
                    icon="spinner9" 
                    description="We guarantee a 1 day delivery on all our collection"
                />
                <UpperFooterItem 
                    subtitle="Fast delivery" 
                    icon="spinner9" 
                    description="We guarantee a 1 day delivery on all our collection"
                />
                <UpperFooterItem 
                    subtitle="Fast delivery" 
                    icon="spinner9" 
                    description="We guarantee a 1 day delivery on all our collection"
                />
            </div>   
        </section>
    )
}

export default UpperFooter;

const UpperFooterItem = ({subtitle, icon, description}) => {
    return (
        <article className="footer-item">
            <svg className="footer-item__icon">
                    <use xlinkHref={`/assets/svg/sprite.svg#icon-${icon}`}></use>
            </svg>
            <div class="footer-item__text-container">
                <h3 className="upper-footer__subtitle">{subtitle}</h3>
                <p className="footer-item__description">{description}</p>
            </div>
        </article>
    )
}