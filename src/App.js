import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: '/',
      value: ' '
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
    if (event.target.value % 2 !== 0) {
      this.setState({ path: '/subtask3' })
    }
  };

  render() {
    const { path } = this.state;

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
      </div>
    );
  }
}
export default App;