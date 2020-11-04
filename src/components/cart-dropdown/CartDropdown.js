import React from 'react';
import CustomButton from '../custom-button/CustomButton'
import './CartDropdown.styles.scss'
import CartItem from '../cart-item/CartItem'
//=====> ROUTER 
import { withRouter } from 'react-router-dom';
//=====> REDUX 
import { connect } from 'react-redux'
import { toggleCart } from '../../redux/cart/cart.actions'
//=====> REDUX RESELECT
import {selectCartItems} from '../../redux/cart/cart.selectors'

//getting history as a prop thanks to withRouter High Order Component
const CartDropdown = ({ items, history, dispatch  }) => (
    <aside className="cart-dropdown">
        <div className="class-items">
            {items.length ? 
            items.map(item => (
                <CartItem key={item.id} item={item} />
            ))
            :
            <span> You have no items in the cart</span>
        }   
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout'); 
            dispatch(toggleCart())
            }
        }>
            GO TO CHECKOUT
        </CustomButton>
    </aside>
)

const mapStateToProps = state => {
    return (
        {items: selectCartItems(state)}
    )
}

//or JUST use the dispatch prop that is automatically passed down when using connect
// const mapDispatchToProp = dispatch => (
//     {toggleCart: () => dispatch(toggleCart())}
// )

export default withRouter(connect(mapStateToProps /*mapDispatchToProp*/)(CartDropdown));