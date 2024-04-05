import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import redux from './index';
import authSaga from '../saga/authSaga';
import wordpressSaga from '../saga/wordpressSaga';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['Auth']
}

export default () => {
    const sagaMiddleware = createSagaMiddleware()
  
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose
  
    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
  
    const persistedReducer = persistReducer(persistConfig, redux)
  
    const store = createStore(persistedReducer, enhancer)
  
    const persistor = persistStore(store)

    sagaMiddleware.run(authSaga);
    sagaMiddleware.run(wordpressSaga);
    
    return { store, persistor }
}