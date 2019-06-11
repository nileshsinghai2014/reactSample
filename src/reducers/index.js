import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import CounterReducer from './CounterReducer';

const allReducers = combineReducers({
  usersReducer, CounterReducer
});

export default allReducers;