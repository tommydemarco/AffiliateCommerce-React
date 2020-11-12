import { take } from 'redux-saga/effects'
import SagasTypes from './sagas.types'

//creating the generator function 
export function* incrementSagas() {
    yield take( SagasTypes.INCREMENT_COUNTER, )
}