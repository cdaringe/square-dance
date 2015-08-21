import 'babel-core/polyfill';
import React from 'react';
import Root from './Root';

require('../styles/main.css');

React.render(<Root />, document.getElementById('root'));
