import React, {Component} from 'react';

export default class ContactView extends Component {
	render() {
		return (
			<div className="contact-view-wrapper">
				<table>
					<tbody>
						<tr>
							<ContactCard></ContactCard>
							<ContactCard></ContactCard>
							<ContactCard></ContactCard>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

class ContactCard extends Component {
	render() {
		return (
			<td >
				<div className="contact-card">
					<div className="contact-top-content">
						<div className="attention-bubble"/>
						<p>Ian Hansborough</p>
					</div>
					<div className="contact-middle-content">
						<div className="card-btn contact-delete-btn"/>
						<div className="card-btn contact-notes-btn"/>
						<div className="card-btn contact-phone-btn"/>
						<div className="card-btn contact-email-btn"/>

					</div>
					<div className="contact-bottom-content">
						<p>Mentors</p>
						
					</div>
				</div>
			</td>
		);
	}
}