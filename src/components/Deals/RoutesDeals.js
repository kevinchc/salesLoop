import React  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavDeals from './NavDeals/NavDeals';

import Pipeline from './Pipeline/Pipeline';
import Deals from './Deals/Deals';
import StagesPipeline from "./Pipeline/StagesPipeline";

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
                        <Route path="/stages/pipelines" component={StagesPipeline}/>
                    </Switch>
                </main>
            </div>
        </BrowserRouter>
    )
};

export { RoutesDeals }