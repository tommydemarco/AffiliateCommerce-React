import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInFailure,
  emailSignInSuccess,
} from "./user.actions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, googleSignInAsync);
}

function* googleSignInAsync() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({
        currentUser: userSnapshot.id,
        // ...userSnapshot.data,
      })
    );
  } catch (error) {
    put(googleSignInFailure(error.message || "There was an error"));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, emailSignInAsync);
}

function* emailSignInAsync({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      emailSignInSuccess({
        currentUser: userSnapshot.id,
      })
    );
  } catch (error) {
    console.log(error);
    yield put(
      emailSignInFailure(
        error.message || "There was an error in the email sign in"
      )
    );
  }
}

export default function* userSaga() {
  yield all([call(onGoogleSignInStart), call(onEmailSignInStart)]);
}
