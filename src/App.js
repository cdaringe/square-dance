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
                <small>use your keys to move the square. or, hover and click arrows</small><br/>
                <small>made with love by <a href="https://github.com/cdaringe/">cdaringe</a> and <a href="https://github.com/swashcap">swashcap</a> - fork us on <a href="https://github.com/cdaringe/square-dance">github</a></small>
            </footer>
        </div>
    );
  }
}

function select(state) {
    return state;
};

export default connect(select)(App);
