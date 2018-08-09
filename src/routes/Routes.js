import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header/Header';
import Deals from '../components/Deals/Deals';
import Mail from '../components/Mail/Mail';

const Routes = (props) => {
  return(
      <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route exact path="/dashboard"/>
                  <Route path="/deals" component={Deals}/>
                  <Route path="/mail" component={Mail}/>
                  <Redirect to="/dashboard"/>
              </Switch>
          </div>
      </BrowserRouter>
  )
};

export { Routes }