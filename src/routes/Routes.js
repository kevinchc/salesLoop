import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header/Header';
import Deals from '../components/Deals/Deals';


const Routes = (props) => {
  return(
      <BrowserRouter>
          <Switch>
              <Route path='/dashboard' component={Header}/>
              <Redirect to="/dashboard"/>
          </Switch>
      </BrowserRouter>
  )
};

export { Routes }