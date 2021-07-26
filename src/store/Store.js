import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducers/authReducer'
import appReducer from "./reducers/appReducer"
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = combineReducers({
    appReducer,
    authReducer,
    
})


const persistConfig = {
    key: 'root',
    storage,
    // storage:AsyncStorage,
    // blacklist: ['globalReducer','authReducer']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store)
 
export default { store, persistor };