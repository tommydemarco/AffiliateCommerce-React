import { createStore, applyMiddleware, compose } from "redux";

//THUNK - can be replaced by SAGA
//import thunk from 'redux-thunk'
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";

//===> IMPORTING THE NECESSARY SAGA FUNCTION FROM REDUX SAGAS
import createSagaMiddleware from "redux-saga";
import { fetchCollectionStart } from "./shop/shop.sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//===> CREATING AN INSTANCE OF THE SAGA MIDDLEWARE
const sagaMiddleware = createSagaMiddleware();

//===> INSERTIN SAGAS INTO THE ARRAY OF MIDDLEWARES
const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

//===> RUNNING THE CREATED SAGAS
sagaMiddleware.run(fetchCollectionStart);

//a persisted version of the store for LOCAL STORAGE
export const persistor = persistStore(store);
