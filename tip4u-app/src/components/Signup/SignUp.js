import React, { Component } from 'react';

class SignIn extends Component {
	constructor() {
		super();
		this.state = {
				firstname: '',
				lastname: '',
				username: '',
				email: '',
				password: '',
		};
	}

	render() {
		return (
			<form onSubmit={this.changeView}>
				<div>
					<h3>Create an account</h3>
					<div>
						<input 
							placeholder="first name"
							name="firstname"
							type="text" 
							value={this.state.firstname}
							onChange={this.handleChange}
							/>
					</div>
					<div>
						<input 
							placeholder="last name"
							name="lastname"
							type="text" 
							value={this.state.lastname}
							onChange={this.handleChange}
							/>
					</div>
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
							placeholder="email"
							name="email"
							type="email"
							value={this.state.email}
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
					<button type="submit">Create</button>
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
		this.props.history.push('/signin')
	}
}

export default SignIn;