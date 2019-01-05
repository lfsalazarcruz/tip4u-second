import React, { Component } from 'react';
import axios from 'axios';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
				username: '',
        password: '',
		};
	}

	render() {
		return (
			<form onSubmit={this.login}>
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

	login = event => {
		event.preventDefault();

		axios
		.post('http://localhost:4000/api/login', this.state)
		.then(res => {
				console.log('Axios response', res);
        localStorage.setItem('jwt', res.data.token);
				this.props.history.push(`/userview/`);
		})
		.catch(err => {
			this.props.history.push('/signin');
			console.log('Axios response: ', err);
		});
	}
}

export default SignIn;