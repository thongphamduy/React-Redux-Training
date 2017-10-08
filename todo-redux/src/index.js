import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import Reducer from "./reducers/Reducer";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
