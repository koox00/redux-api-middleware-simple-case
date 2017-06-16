import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import configureStore from "./configureStore";

const store = configureStore();

ReactDOM.render(<App store={store} yak/>, document.getElementById('root'));

registerServiceWorker();
