import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { loadData } from "./actions";
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.loadData('koox00');
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default connect(null, { loadData })(App);
