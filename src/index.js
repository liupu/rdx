import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
import App from './components/app';
const rootElement = document.querySelector('#root');

const store = createStore(
    reducer,
    applyMiddleware(createLogger())
);

render(<Provider store={store}>
    <App />
</Provider>, rootElement)