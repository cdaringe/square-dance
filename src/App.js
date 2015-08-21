import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Dancefloor from './dancefloor';

export default class App extends Component {
  render() {
    const props = { x: 0, y: 0 };
    return (
        <div class="app">
            <Dancefloor props={props} />
            <footer>
                <small>From cdaringe and swashcap</small>
            </footer>
        </div>
    );
  }
}
