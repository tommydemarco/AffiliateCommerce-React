//===> ALL: allows to "boot up" all the necessary sagas at the same time
//          takes an array of sagas (preferably called with the call function)
import { all, call } from "redux-saga/effects";

import { fetchCollectionStart } from "./shop.sagas.js";

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
