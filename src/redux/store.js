import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReduceriuuuu from './root-reducer';

const middlewares = [ logger ]

export const store = createStore( rootReduceriuuuu, applyMiddleware( ...middlewares ) )

//a persisted version of the store for LOCAL STORAGE 
export const persistor = persistStore( store )