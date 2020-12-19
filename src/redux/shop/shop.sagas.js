//===> TAKEEVERY: listens to actions of  specific type
/*===> CALL: a function that invokes a function (first argument)
             with the arguments of the functon to invoke (second argument)
*/
/*===> PUT: the function that dispatches a certain action creator */
import { takeEvery, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionArrayToMap,
} from "../../firebase/firebase.utils";

import { fetchCollectionSuccess, fetchCollectionError } from "./shop.actions";

import ShopTypes from "./shop.types";

//creating the generator functions that fire off during the yelds
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionArrayToMap, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
    console.log("THE FETCHING WAS SUCCESSFULLY PERFORMED");
  } catch (e) {
    yield put(fetchCollectionError(e.message));
  }
}

//creating the main generator function
export function* fetchCollectionStart() {
  yield takeEvery(ShopTypes.FETCH_COLLECTION_START, fetchCollectionAsync);
}
