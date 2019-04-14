import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import App from './app';
import reducer from './reducer';

const rootElement = document.querySelector('#root');

const store = createStore(
    reducer,
    applyMiddleware(logger)
);

const renderView = () => {
    render(
        <App value={store.getState()}
            addFun={() => store.dispatch({ type: 'ADD' })}
            minusFun={() => store.dispatch({ type: 'MINUS' })}
            addAsInputNum={(number) => store.dispatch({ type: 'ADDASINPUT', number })}
        />, rootElement);
}
renderView();
store.subscribe(renderView);