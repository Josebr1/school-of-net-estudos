import { combineReducers } from "redux";

import CounterReducer from './CounterReducer';

export default combineReducers({
    // data: dataReducers
    counter: CounterReducer
});