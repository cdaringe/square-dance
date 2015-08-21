import React, { Component } from 'react';
import App from './App';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  devTools(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)),
  createStore
);
const store = finalCreateStore(rootReducer);

export default class Root extends Component {
  render() {
    return (
        <div>
            <Provider store={store}>
                {() => <App /> }
            </Provider>
            <DebugPanel top right bottom>
              <DevTools store={store}
                    monitor={LogMonitor} />
            </DebugPanel>
        </div>
    );
  }
}
