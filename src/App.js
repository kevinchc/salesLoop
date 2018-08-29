import React, { Component } from 'react';
import './App.css';
import { Routes } from './routes/Routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Header from './components/Header/Header';

import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import LuxonUtils from 'material-ui-pickers/utils/luxon-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import rootReducer from "./reducers/rootReducer";
const store = createStore(rootReducer);

const App = (props) => {
    return(
        <Provider store={store} >
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Routes/>
            </MuiPickersUtilsProvider>
        </Provider>
    )
};

export default App;