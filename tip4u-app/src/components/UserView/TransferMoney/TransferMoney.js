import React, { Component } from 'react';

class TransferMoney extends Component {
	render() {
		return (
			<div>
				<h5>This is the Transfer money view.</h5>
				<p>Send money to</p>
				<form>
					<input 
						placeholder="username"
						name="username"
						type="text" 
						onChange={this.handleChange}
						/>
					<button onClick={this.changeView}>Next</button>
				</form>
			</div>
		);
	}

	changeView = event => {
		event.preventDefault();
		this.props.history.push('/verification');
	}
}

export default TransferMoney;