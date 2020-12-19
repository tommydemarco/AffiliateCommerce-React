import { takeLatest, put, call, all } from "redux-saga/effects";

import { UserActionTypes } from "../user/user.types";
import { clearCart } from "./cart.actions";

function* clearCartItems() {
  yield put(clearCart);
}

function* clearCartOnLogout() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartItems);
}

export default function* cartSaga() {
  yield all([call(clearCartOnLogout)]);
}
