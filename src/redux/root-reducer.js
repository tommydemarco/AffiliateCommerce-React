import { combineReducers } from 'redux';
//=======> IMPORTING THE SINGLE REDUCERS
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import sagasReducer from './sagas/sagas.reducer'

//=======> PERSISTER CONFIGURATION
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

//add fields here to persist them
const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [ 'cart', 'directory', 'sagas' ]
}


export default persistReducer( persistConfig, combineReducers( {
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    sagas: sagasReducer
} ) )