import React, { Component } from 'react';
import { Provider } from 'react-redux';
export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
            {() => <h1>Hello, world.</h1>}
        </Provider>
    );
  }
}
        // <h1>Hello, world.</h1>
