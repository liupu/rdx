import React  from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import App from './components/app';

const rootElement = document.querySelector("#root");
const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(logger)
    );

render(
    <Provider store={ store }>
        <App />
    </Provider>,rootElement
)