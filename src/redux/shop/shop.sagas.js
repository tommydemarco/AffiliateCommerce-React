import { takeEvery, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionArrayToMap } from '../../firebase/firebase.utils'

import { fetchCollectionSuccess, fetchCollectionError } from './shop.actions'

import ShopTypes from './shop.types'

//creating the generator functions that fire off during the yelds 
export function* fetchCollectionAsync() {
    try {
        const collectionRef = firestore.collection( 'collections' )
        const snapshot = yield collectionRef.get()
            //using the call effect is optional but is recommended 
        const collectionsMap = yield call( convertCollectionArrayToMap, snapshot )
            //put is the equivalent of dispatch for sagas, we are dispatching 
            //the action creator
        yield put( fetchCollectionSuccess( collectionsMap ) )
    } catch( e ) {
        yield put( fetchCollectionError( e.message ) )
    }
}

//creating the main generator function
export function* fetchCollectionStart() {
    yield takeEvery( ShopTypes.FETCH_COLLECTION_START, fetchCollectionAsync )
}