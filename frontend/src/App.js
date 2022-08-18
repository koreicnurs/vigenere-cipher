import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./components/UI/Layout/Layout";
import Code from "./containers/Code/Code";

const App = () => {
  return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Code} />
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </Layout>
  )
};

export default App;
