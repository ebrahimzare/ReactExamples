import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Employees from './Employees'



ReactDOM.render(
  <Router>
    <Employees />
  </Router>,
  document.getElementById('root'),
);