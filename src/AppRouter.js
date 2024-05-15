import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/login' component={Login} />
      <Route path='/signup' component={Signup} />
      <Route path='/dashboard' component={Dashboard} />
    </Switch>
  </Router>
);

export default AppRouter;