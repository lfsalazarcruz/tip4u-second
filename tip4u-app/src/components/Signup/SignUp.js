import React, { Component } from 'react';
import axios from 'axios';

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
			<form onSubmit={this.registerUser}>
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

	registerUser = event => {
		event.preventDefault();
		
		axios
		.post('http://localhost:4000/api/register', this.state)
		.then(res => {
			console.log('Axios response', res);
			localStorage.setItem('jwt', res.data.token);
			this.props.history.push('/signin');
		})
		.catch(err => {
			this.props.history.push('/signin');
			console.error('Axios response: ', err);
		})
	}
}

export default SignIn;