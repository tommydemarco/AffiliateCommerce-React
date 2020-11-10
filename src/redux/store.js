import { createStore, applyMiddleware, compose } from 'redux';
//import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlewares = [] //[ logger ]

//Redux browser extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore( rootReducer, composeEnhancers( applyMiddleware( ...middlewares ) ) )

//a persisted version of the store for LOCAL STORAGE 
export const persistor = persistStore( store )