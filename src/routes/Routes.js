import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Header from '../components/Header/Header';

const Routes = (props) => {
  return(
      <BrowserRouter>
        <Switch>
            <Route path="/" component={Header}/>
        </Switch>
      </BrowserRouter>
  )
};

export { Routes }