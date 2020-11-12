import { createStore, applyMiddleware, compose } from 'redux';

//THUNK - can be replaced by SAGA
//import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga'
import { fetchCollectionStart } from './shop/shop.sagas'

//Redux browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();

const middlewares = [ sagaMiddleware ] //[ logger ]

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware( ...middlewares ) ) )

sagaMiddleware.run( fetchCollectionStart )

//a persisted version of the store for LOCAL STORAGE 
export const persistor = persistStore( store )