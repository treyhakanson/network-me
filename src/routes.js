import React, { Component } from 'react';
import { Route, IndexRoute } from 'react-router';
import {Dashboard} from 'Dashboard';

import App from 'App';

export default (
	<Route path="/" component={App}>
	<IndexRoute component={Dashboard}/>
	</Route>
);