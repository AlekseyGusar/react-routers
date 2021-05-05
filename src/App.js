import React from 'react';
import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Subtask3 from './components/Subtask3';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSubtask3: false,
      path: '/',
      value: ' '
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    if (event.target.value % 2 !== 0) {
      this.setState({ renderSubtask3: true, path: '/subtask3' })
    }
  };

  render() {
    const { path, renderSubtask3 } = this.state;

    return (
      <div className="App">
        <h1>React Marathon</h1>
        <h2>The topic 'Routes'</h2>
        <Link to={path}>Show protected information if</Link>
        <span>&nbsp;</span>
        <input size="5" onChange={this.handleChange} type="text" name="input" value={this.state.value}></input> is odd 
        <div className="mainClass">
          Go to the component programmatically, by checking the box:{" "}
          <input type="checkbox"></input>
        </div>
        <Switch>
          { renderSubtask3 && 
            <Route path='/subtask3' component={Subtask3}></Route>
          }
        </Switch>
      </div>
    );
  }
}
export default App;