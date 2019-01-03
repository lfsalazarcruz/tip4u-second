import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<Link to='signin'>Sign In</Link>
				<Link to='signup'>Create account</Link>
			</div>
		);
	}
}

export default Home;