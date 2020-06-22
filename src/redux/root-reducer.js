import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/lib/storage/session';
import userReducer from './user/user.reducer';


const persistConfig = {
  key: 'root',
  storage: persistStore,
  whitelist: ['user']
};

const rootReducer = combineReducers({
  user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
