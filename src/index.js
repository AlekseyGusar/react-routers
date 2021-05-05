import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Subtask1 from './components/Subtask1';
import Subtask2 from './components/Subtask2';
import Subtask4 from './components/Subtask4';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/subtask1/:id" component={Subtask1}></Route>
        <Route path="/subtask2" component={Subtask2}></Route>
        <Route path="/subtask3" component={App}></Route>
        <Route path="/subtask4" component={Subtask4}></Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
