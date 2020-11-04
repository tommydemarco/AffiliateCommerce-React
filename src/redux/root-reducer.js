import { combineReducers } from 'redux';
//=======> IMPORTING THE SINGLE REDUCERS
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';

//=======> PERSISTER CONFIGURATION
import { persistReducer } from 'redux-persist'
import storage from'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart', 'directory']
}


export default persistReducer(persistConfig, combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer
}))