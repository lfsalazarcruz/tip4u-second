import React, { Component } from 'react';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
				username: '',
				password: '',
		};
	}

	render() {
		return (
			<form onSubmit={this.changeView}>
				<div>
					<h3>Sign In</h3>
					<div>
						<input 
							placeholder="username"
							name="username"
							type="text" 
							value={this.state.username}
							onChange={this.handleChange}
							/>
					</div>
					<div>
						<input 
							placeholder="password"
							name="password"
							type="password" 
							value={this.state.password}
							onChange={this.handleChange}
							/>
					</div>
					<button type="submit">Log in</button>
				</div>
			</form>
		)
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	}

	changeView = event => {
		event.preventDefault();
		this.props.history.push('/userview')
	}
}

export default SignIn;