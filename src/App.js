import React, { Component } from 'react';
import './App.scss';
import store from './store';
import { Provider } from 'react-redux';
import Tasks from './components/Tasks';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        priority: 'medium',
    }
}
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className='app-wrapper'>
            <Header />
            <Tasks priority={this.state.priority}/>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;