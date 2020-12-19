import { takeLatest, put, all, call } from "redux-saga/effects";
import { UserActionTypes } from "./user.types";

import {
  googleSignInFailure,
  googleSignInSuccess,
  emailSignInFailure,
  emailSignInSuccess,
  signOutFailure,
  signOutSuccess,
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

export function* isUserSignedIn() {
  yield takeLatest(UserActionTypes.IS_USER_SIGNED_IN, checkUserSignedIn);
}

export function* checkUserSignedIn() {
  yield console.log("The check user sign in generator was called successfully");
}

export function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, onSignOutAsync);
}

export function* onSignOutAsync() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess);
  } catch (error) {
    yield put(signOutFailure(error.message));
  }
}

export default function* userSaga() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(isUserSignedIn),
    call(onSignOut),
  ]);
}
