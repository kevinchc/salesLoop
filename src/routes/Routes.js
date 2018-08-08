import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header/Header';


const Routes = (props) => {
  return(
      <BrowserRouter>
        <Switch>
            <Route exact path="/dashboard"/>
            <Redirect to="/dashboard"/>
        </Switch>
      </BrowserRouter>
  )
};

export { Routes }