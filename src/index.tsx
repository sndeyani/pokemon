import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import store from './store/store';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    // <React.StrictMode>
        <Provider store={store}>
            <Router>
                <React.Suspense fallback={<div>Loading ...</div>}>
                    <App />
                </React.Suspense>
            </Router>
        </Provider>
    // </React.StrictMode>
);