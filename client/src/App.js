import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OtherPage from './OtherPage';
import Home from './Home';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
	  <h1>Zadanie nr 1</h1>
          <ul>
	  	<li><Link to="/">Home</Link></li>
          	<li><Link to="/fib">Fibonacci Calc</Link></li>
          </ul>
	  </header>
	<br />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/fib" component={Fib} />
        </div>
      </div>
    </Router>
  );
}

export default App;
