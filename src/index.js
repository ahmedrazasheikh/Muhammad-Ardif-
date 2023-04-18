import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { App } from './App';
import { ToastContainer } from 'react-toastify';
import { ReferenceDataContextProvider } from './components/Context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ReferenceDataContextProvider>
                        <App />
                    </ReferenceDataContextProvider>
                </PersistGate>
            </Provider>
            <ToastContainer />
        </BrowserRouter>
    </React.StrictMode>
);
