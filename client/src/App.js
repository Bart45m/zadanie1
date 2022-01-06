import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Documentation from './Documentation';
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
		<li><Link to="/documentation">Documentation</Link></li>
          </ul>
	  </header>
	<br />
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/fib" component={Fib} />
	  <Route path="/documentation" component={Documentation} />
        </div>
      </div>
    </Router>
  );
}

export default App;
