import React, { Component } from 'react';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import Tasks from './components/Tasks';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className='app-wrapper'>
            {/* input */}
            <Tasks />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;