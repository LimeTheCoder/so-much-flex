import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HelpPage from './HelpPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>
            Cool app! Isn't it?
          </p>
          <Link to="/">Home</Link>
          <Link to="/help">Help Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/help" component={HelpPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
