import {createStore, applyMiddleware} from 'redux';
import conferences from '../reducers/conferences';
import thunk from 'redux-thunk';

export default () =>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(conferences,composeEnhancers(applyMiddleware(thunk)));
    return store;
};