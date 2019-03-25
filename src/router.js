import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import dynamic from 'dva/dynamic'

import Card from './cards';



function RouterConfig({ history,app}) {

   const Button = dynamic({
        app,
        component: () => import('./Button')
    })

const Products = dynamic({
        app,
        component: () => import('./routes/Products')
    })

  return (
    <Router history={history}>
      <Switch>
      <Route path="/Card" exact component={Card} />
        <Route path="/" exact component={IndexPage} />
        <Route path="/Button" exact component={Button} />
        <Route path="/products" exact component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
