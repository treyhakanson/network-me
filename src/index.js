// third-party modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// custom modules
import routes from 'routes';
import { configureStore } from 'configureStore';

// styles
require('style!css!sass!stylesheet');

ReactDOM.render(
	<Provider store={configureStore()}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);