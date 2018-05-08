import React, { Component } from 'react';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;