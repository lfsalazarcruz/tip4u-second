import React, { Component } from 'react';

class UserView extends Component {
	render() {
		return (
			<div>
				<div>
					<button onClick={this.logout}>Log out</button>
					<h1>Hi, User!</h1>
					<p>Let's get you started.</p>
					<div>
						<h3>Account</h3>
						<p>Linked your bank account now!</p>
					</div>
				</div>
				<div>
					<button onClick={this.changeView}>Send money!</button>
				</div>
			</div>
		);
	}

	changeView = event => {
		event.preventDefault();
		this.props.history.push('/transfer');
	}

	logout = event => {
		event.preventDefault();
		this.props.history.push('/signin');
	}
}

export default UserView;