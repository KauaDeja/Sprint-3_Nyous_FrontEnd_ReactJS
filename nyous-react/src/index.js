import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home';
import Login from './pages/login';
import Cadastrar from './pages/cadastrar';
import NaoEncontrada from './pages/naoencontrada';


import * as serviceWorker from './serviceWorker';

// css do bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import das rotas
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const routing = (
  // Por onde vai passar as chamadas
  <Router>
    <Switch>
      <Route exact path = '/' component= {Home} />
      <Route path = '/login' component= {Login} />
      <Route path = '/cadastrar' component= {Cadastrar} />
      <Route component={NaoEncontrada} />

    </Switch>
  </Router>
)

ReactDOM.render(
  routing,  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
