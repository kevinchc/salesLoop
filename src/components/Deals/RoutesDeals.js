import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavDeals from './NavDeals/NavDeals';

import Pipeline from './Pipeline/Pipeline';
import Deals from './Deals/Deals';

const  RoutesDeals= (props) => {
    return(
        <BrowserRouter>
            <div>
                <header>
                    <NavDeals/>
                </header>
                <main>
                    <Switch>
                        <Route exct path="/pipeline" component={Pipeline}/>
                        <Route path="/deals" component={Deals}/>
                        <Redirect to="/deals"/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
};

export { RoutesDeals }