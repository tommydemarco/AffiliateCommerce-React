import React from 'react'
import PropTypes from 'prop-types'
import './Sagas.styles.scss'
//=======> REDUX 
import { connect } from 'react-redux'
//=======> ACTIONS 
import { incrementCounter, decrementCounter } from '../../redux/sagas/sagas.actions'

const SagasPage = ({ counter, incrementCounter,  decrementCounter}) => {
    return (
        <div className="container">
            <div className="counter-display">
                <h2>{counter}</h2>
                <button onClick={incrementCounter}>Increment Conter</button>
                <button onClick={decrementCounter}>Decrement Conter</button>
            </div>
        </div>
    )
}

SagasPage.propTypes = {
    counter: PropTypes.number
}
SagasPage.defaultProps = {
    counter: 0
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: () => dispatch(incrementCounter()),
        decrementCounter: () => dispatch(decrementCounter())
    }
}
const mapStateToProps = state => {
    return {counter: state.sagas.counter}
}

export default connect(mapStateToProps, mapDispatchToProps)(SagasPage);