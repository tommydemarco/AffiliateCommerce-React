import ShopTypes from './shop.types'
import { firestore, convertCollectionArrayToMap } from '../../firebase/firebase.utils'

export const fetchCollectionStart = () => {
    return {
        type: ShopTypes.FETCH_COLLECTION_START
    }
}
export const fetchCollectionSuccess = ( collectionsMap ) => {
    return {
        type: ShopTypes.FETCH_COLLECTION_SUCCESS,
        payload: collectionsMap
    }
}

export const fetchCollectionError = ( e ) => {
    return {
        type: ShopTypes.FETCH_COLLECTION_ERROR,
        payload: e
    }
}

export const fetchCollectionStartAsync = () => {
    return( dispatch, getState ) => {
        //dispatching the first action to start the process
        dispatch( fetchCollectionStart() )

        const collectionRef = firestore.collection( 'collections' )
        collectionRef.get()
            .then( snapshot => {
                const collectionsMap = convertCollectionArrayToMap( snapshot )
                dispatch( fetchCollectionSuccess( collectionsMap ) )
            } )
            .catch( e => dispatch( fetchCollectionError( e.message || 'There was an error' ) ) )
    }
}