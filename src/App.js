import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dancefloor from './dancefloor';
import * as Actions from '../actions/actions';

export default class App extends Component {
  render() {
    const { square, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
        <div class="app">
            <Dancefloor {...actions} square={square} />
            <footer>
                <small>From cdaringe and swashcap</small>
            </footer>
        </div>
    );
  }
}

function select(state) {
    return state;
};

export default connect(select)(App);
