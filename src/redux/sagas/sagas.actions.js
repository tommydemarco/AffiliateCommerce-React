import SagasTypes from './sagas.types'

export const incrementCounter = () => {
    return { type: SagasTypes.INCREMENT_COUNTER }
}

export const decrementCounter = () => {
    return { type: SagasTypes.DECREASE_COUNTER }
}