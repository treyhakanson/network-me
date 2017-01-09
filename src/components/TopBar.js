import React, {Component} from 'react';

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<div className="search-bar-cont">
					<img src="https://s3.amazonaws.com/networking-tool/ic_search_white_36px.svg" alt=""/>
					<form>
						<input className="search-bar-input" type="text" placeholder="Search" />	
					</form>
				</div>
				<div className="add-contact-btn">
					<img src="https://s3.amazonaws.com/networking-tool/ic_people_white_36px.svg" alt=""/>
					<p>Add Contact</p>
				</div>
			</div>
		)
	}
}