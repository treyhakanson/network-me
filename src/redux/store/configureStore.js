import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'

import reducers from 'reducers';

export const configureStore = () => {
	const store = applyMiddleware(
		// add your middleware here
		ReduxPromise
	)(createStore);
	
	return store(reducers);
}