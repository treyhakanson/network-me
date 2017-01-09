import React, {Component} from 'react';
import LeftPane from './LeftPane';
import TopBar from './TopBar';
import ContactView from './ContactView';
export const Dashboard = () => {
	return (
		<div>
			<LeftPane/>
			<TopBar/>
			<ContactView/>
		</div>
	) 
}