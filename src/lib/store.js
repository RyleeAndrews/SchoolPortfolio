import {createStore, applyMiddleware} from 'redux';

import reducer from '../components/blog/reducer.js';
import reporter from './middleware/reporter.js';
import thunk from './middleware/thunk.js';

export default () => createStore(reducer, applyMiddleware(thunk,reporter));
