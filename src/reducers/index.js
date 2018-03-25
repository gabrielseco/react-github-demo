import { combineReducers } from 'redux';
import { router } from './router';

const rootReducer = combineReducers({
  router: router
});

export default rootReducer;
