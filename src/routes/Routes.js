import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Header from '../components/Header/Header';
import Deals from '../components/Deals/Deals';
import { RoutesDeals } from '../components/Deals/RoutesDeals';
import Mail from '../components/Mail/Mail';
import Activities from '../components/Activities/Activities';
import People from '../components/People/People';
import Organization from '../components/Organization/Organization';
import StatisticsDashboard from '../components/StatisticsDashboard/StatisticsDashboard';
import StatisticsDeal from '../components/StatisticsDeal/StatisticsDeal';

const Routes = (props) => {
  return(
      <BrowserRouter>
          <div>
              <Header/>
              <Switch>
                  <Route exact path="/dashboard"/>
                  <Route path="/deals" component={RoutesDeals}/>
                  <Route path="/mail/inbox" component={Mail}/>
                  <Route path="/activities/list" component={Activities}/>
                  <Route path="/person/list" component={People}/>
                  <Route path="/organizations/list" component={Organization}/>
                  <Route path="/statistics/dashboard"/> component={StatisticsDashboard}/>
                  <Route path="/statistics/deal" component={StatisticsDeal}/>
                  <Redirect to="/dashboard"/>
              </Switch>
          </div>
      </BrowserRouter>
  )
};

export { Routes }