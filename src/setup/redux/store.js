import { createStore, compose, combineReducers } from 'redux';
import rootReducer from './reducer';

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(),
);

export default store;