import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routers/AppRouter'
import ReactDOM from 'react-dom';
import getAppStore from './store/store';
import {getConferences} from "./actions/conferences";
import {Provider} from 'react-redux';

const store = getAppStore();

const template = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

store.dispatch(getConferences()).then(()=>{
    ReactDOM.render(template,document.getElementById('app'));
});