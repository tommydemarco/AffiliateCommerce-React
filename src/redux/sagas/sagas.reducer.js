import SagasTypes from './sagas.types'

const INITIAL_STATE = {
    counter: 0
}
const sagasReducer = ( state = INITIAL_STATE, action ) => {
    switch( action.type ) {
        case SagasTypes.INCREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter + 1
            }
        case SagasTypes.DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        default:
            return state
    }
}

export default sagasReducer