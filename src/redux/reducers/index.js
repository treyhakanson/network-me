import { combineReducers } from 'redux';
import GroupReducer from './GroupReducer';
// ### IMPORTANT ###
// this is an example reducer to allow the app
// to create a redux store successfully. Remove
// once your own reducers have been added.

const rootReducer = combineReducers({
	// insert reducers here
	GroupReducer
});

export default rootReducer;