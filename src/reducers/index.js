//REDUCERS ALL HERE

import { combineReducers } from 'redux';
import musicalReducer from './reducer-musicals';

const rootReducer = combineReducers({
  musicals:musicalReducer // this is one of our reducers
});

export default rootReducer;
