import React, {Component} from 'react';
import Avatar from 'material-ui/Avatar';
import {createGroup} from 'Queries';
import {getGroupsAction} from 'Actions';
import {connect} from 'react-redux';

class LeftPane extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addGroupInputText: "",
			addGroupIconActive: false
		};

		this.submitAddGroup = 		this.submitAddGroup.bind(this);
		this.handleAddGroupChange = this.handleAddGroupChange.bind(this);
		this.toggleAddGroup = 		this.toggleAddGroup.bind(this);
	}

	toggleAddGroup() {
		(this.state.addGroupIconActive) ? this.setState({ addGroupIconActive: false }) : this.setState({ addGroupIconActive: true }) ;
	}

	submitAddGroup(event) {
		console.log('submitting');
		event.preventDefault();
		createGroup(this.state.addGroupInputText)
			// .then(response => {
			// 	//this is where we call the get_groups action reducer 
			// 	getGroupsAction()
			// })
			// .catch(error => {
			// 	console.log('failed with error: ', error);
			// })
	}

	handleAddGroupChange(event) {
		this.setState({addGroupInputText: event.target.value})
	}

	render() {
		return (
			<div className="left-pane">
				<div className="left-pane-logo-cont">
					<img src="http://lorempixel.com/100/100/" alt=""/>
					<p>network.me</p>
				</div>
				<li className="left-pane-group-list">
					<GroupButton/>
					<GroupButton/>
					<GroupButton/>
					<GroupButton/>
					<GroupButton/>
				</li>
				<div className="left-pane-add-group-btn">
					<div className={`${(this.state.addGroupIconActive) ? "active" : ""} add-group-icon`} 
						onClick={this.toggleAddGroup}/>
					<form onSubmit={this.submitAddGroup}>
						<input className={`${(this.state.addGroupIconActive) ? "active" : ""} add-group-input`} 
								onChange={this.handleAddGroupChange} 
								value={this.state.addGroupInputText} 
								type="text" placeholder="Add Group"/>
					</form>
				</div>
			</div>
		)
	}
}

class GroupButton extends Component {
	render() {
		return (
			<ul>
				<div className="left-pane-group" onClick={() => {alert('clicked!')}}>
					<Avatar backgroundColor="#BBDEFB">A</Avatar>
					<p>Group Name</p>
				</div>
			</ul>
		)
	}
}

function mapStateToProps({state}) {
	debugger;
	return {state};
}

export default connect(mapStateToProps)(LeftPane);





