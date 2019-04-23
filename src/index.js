import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, appleMiddeware } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './reducer';
const rootElement = document.querySelector('#root');

const store = createStore(
    reducer,
    appleMiddeware(createLogger())
);

render(<Provider store={store}>
    <App />
</Provider>, rootElement)