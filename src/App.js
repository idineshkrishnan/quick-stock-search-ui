import React from 'react';
import "antd/dist/antd.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:companyCode" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
