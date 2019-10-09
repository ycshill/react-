import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleWare));

const store = createStore(reducer, enhancer);

sagaMiddleWare.run(mySagas);

export default store;
