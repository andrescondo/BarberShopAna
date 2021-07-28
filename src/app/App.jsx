import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../views/contrainers/Layout'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Switch>

        </Switch> */}
      </Layout>
    </BrowserRouter>
  );
};

export default App;