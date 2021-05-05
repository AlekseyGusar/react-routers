import React from 'react';
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';
import Subtask1 from './components/Subtask1';
import Subtask2 from './components/Subtask2';

export default function App() {
  return (
    <div className="App">
      <h1>React Marathon</h1>
      <h2>The topic 'Routes'</h2>
      <a href='/'>Show protected information if</a>
      <span>&nbsp;</span>
      <input size="5"></input> is odd
      <div className="mainClass">
        Go to the component programmatically, by checking the box:{" "}
        <input type="checkbox"></input>
      </div>
      <Router>
        <Switch>
          <Route path="/subtask1/:id" component={Subtask1}></Route>
          <Route path="/subtask2" component={Subtask2}></Route>
        </Switch>
      </Router>
    </div>
  );
}
