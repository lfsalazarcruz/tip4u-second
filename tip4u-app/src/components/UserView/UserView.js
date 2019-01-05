import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios';

class UserView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
	render() {
		return (
			<div>
				<div>
					<button onClick={this.logout}>Log out</button>
          {/* mapping through data array */}
          <ul> 
            {this.state.users.map(user => {
              return (
                <h1>Hi, {user.firstname} {user.lastname}</h1>
              )
            })}
          </ul>
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
    localStorage.removeItem('jwt');
		this.props.history.push('/signin');
  }
  
  componentDidMount() {
    const token = localStorage.getItem('jwt');
    const userData = {
      headers: {
        Authorization: token,
      }
    };

  axios
  // make the requested ID dynamic
    .get(`http://localhost:4000/api/8`, userData)
    .then(res => {
      console.log('User Data:', res);
      this.setState({
        users: res.data
      });
    })
    .catch(err => {
      console.error('Axios respose:', err)
    });

    const user = this.state.users.map(user => {
      return user.id
    });
    console.log("This is user", user);
  };
}

export default withRouter(UserView);