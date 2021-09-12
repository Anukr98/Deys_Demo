import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Routes/Login';
import Dashboard from './Routes/Dashboard';
import Company from './Routes/Company'

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path = "/" component = {Login} />
      <Route exact path = "/dashboard" component = {Dashboard} />
      <Route exact path = "/company" component = {Company} />
    </Router>
  );
}

export default App;
