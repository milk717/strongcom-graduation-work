import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
//redux 관련
import rootReducer from "./modules";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger'
//style 관련
import GlobalStyle from "./resources/style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import theme from "./resources/style/theme";
import {StyledEngineProvider} from '@mui/material';
import {jsonApi} from "./api/jsonApi";
import {reminderSlice} from "./modules/reminderSlice";

const store = configureStore({
    reducer: {
        reminder: reminderSlice.reducer,
        [jsonApi?.reducerPath]: jsonApi?.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonApi.middleware),
    devTools: process.env.NODE_ENV !== "production",

});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </ThemeProvider>
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
