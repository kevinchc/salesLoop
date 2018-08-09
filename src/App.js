import React, { Component } from 'react';
import './App.css';
import { Routes } from './routes/Routes';

import { Provider } from 'react-redux';
import Header from './components/Header/Header';

import { configureStore } from './store/configureStore';
const store = configureStore();

const App = (props) => {
    return(
        <Provider store={store} >
            <Routes/>
        </Provider>
    )
};

export default App;