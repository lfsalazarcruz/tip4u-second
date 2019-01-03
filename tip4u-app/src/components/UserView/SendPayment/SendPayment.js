import React, { Component } from 'react';

class SendPayment extends Component {
	render() {
		return (
			<div>
				<p>Sending money to: </p>
				<h3>Username / email</h3>
				<div>
					<h5>$ 10.00</h5>
				</div>
				<div>
					<p>Note / Review: <br/>Great Service</p>
				</div>
				<button onClick={this.changeView}>Send Payment Now</button>
			</div>
		);
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	changeView = event => {
		event.preventDefault();
		this.props.history.push('/userview');
	}
}

export default SendPayment;