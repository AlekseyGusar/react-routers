import React from 'react';
import './App.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import Subtask1 from './components/Subtask1';
import Subtask2 from './components/Subtask2';
import Subtask3 from './components/Subtask3';
import Subtask4 from './components/Subtask4';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderSubtask3: false,
      path: '/',
      renderSubtask4: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleChange(event) {
    if (event.target.value % 2 !== 0) {
      this.setState({ renderSubtask3: true, path: '/subtask3' })
    } else {
      this.setState({ renderSubtask3: false, path: '/' })
    }

  };

  handleCheckboxChange(event) {
    this.setState({ renderSubtask4: !this.state.renderSubtask4 },() => {
      if (this.state.renderSubtask4) {
         this.props.history.push('/subtask4')
      };
    })
  };

  render() {
    const { path, renderSubtask3, renderSubtask4} = this.state;

    return (
      <div className="App">
        <h1>React Marathon</h1>
        <h2>The topic 'Routes'</h2>
        <Link to={path}>Show protected information if</Link>
        <span>&nbsp;</span>
        <input size="5" onChange={this.handleChange} type="text" name="input"></input> is odd 
        <div className="mainClass">
          Go to the component programmatically, by checking the box:{" "}
          <input type="checkbox"
                 name="checkbox"
                 checked={renderSubtask4}
                 onChange={this.handleCheckboxChange}>
          </input>
        </div>
        <Switch>
          <Route path="/subtask1/:id" component={Subtask1}></Route>
          <Route path="/subtask2" component={Subtask2}></Route>
          { renderSubtask3 && 
            <Route path='/subtask3' component={Subtask3}></Route>
          }
          { renderSubtask4 && 
            <Route path='/subtask4' component={Subtask4}></Route>
          }
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);