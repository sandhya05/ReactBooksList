import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Books from './books'

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/books">Books</Link></li>
          </ul>
          <hr />
  
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/books" component={Books} />
        </div>
      </HashRouter>
    );
  }
}

const About = () => <div><h2>About</h2></div>

function Home(){
  return (
    <div>
      <h3>Welcome to shopping!!</h3>
    </div>
  );
}

export default App;