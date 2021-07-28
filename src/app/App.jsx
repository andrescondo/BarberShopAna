import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../views/contrainers/Layout'
import Home from '../views/contrainers/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;