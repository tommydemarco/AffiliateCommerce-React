import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price}) => {

    const onToken = token => {
        console.log(token);
        alert('Payment ok')
    }
    const priceStripe = price * 100
    const publishableKey = 'pk_test_51HlzGUEK95gtVdslY3OjzW85dZp2nCvYnJVPLR3wSYvBS9VUHK3dSxQWXVivBMtlVZrkODSptGDEteqHZiQzTe6x00h4801jcR'
    return (
        //the stripe checkout component in higly configurable
        //with address, currency and whatnot
        <StripeCheckout 
            label="Pay now"
            name="React App"
            billingAddress
            shippingAddress
            image=""
            description={`Your Total is ${price}`}
            amount={priceStripe}
            panelLabel="Pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )   
}

export default StripeButton