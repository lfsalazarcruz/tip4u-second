import React, { Component } from 'react';

class TransferVerification extends Component {
	render() {
		return (
			<div>
				<p>Sending money to: </p>
				<h3>Username / email</h3>
				<div>
					<input 
						placeholder="$0.00"
						name="amount"
						type="number" 
						onChange={this.handleChange}
						/>
				</div>
				<div>
					<input 
						placeholder="Add a review..."
						name="review"
						type="text" 
						onChange={this.handleChange}
						/>
				</div>
				<button onClick={this.changeView}>Continue</button>
			</div>
		);
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	changeView = event => {
		event.preventDefault();
		this.props.history.push('/send');
	}
}

export default TransferVerification;

