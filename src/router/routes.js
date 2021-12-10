import React from 'react';
import Home from '../pages/Home';
import BuscarCEP from '../pages/BuscarCEP'
import {BrowserRouter, Switch, Route } from  'react-router-dom';
import BuscarEndereço from '../pages/BuscarEndereço';

function  Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/buscarCEP" component={BuscarCEP} exact/>
        <Route path="/buscarEndereço" component={BuscarEndereço} exact/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;