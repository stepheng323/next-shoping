import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../custom-button/custom-button';

class SignIn extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleChange = (e) => {
  const {name, value} = e.target;
  this.setState({
    [name]: value
  })
  }

  handleSubmit = (e) => {
    
  }
	render() {
		return <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with you email and password</span>

      <form onSubmit={this.handleSubmit}>
        <FormInput
         type="email"
         name="email"
         handleChange={this.handleChange}
         value={this.state.email}
         label="email"
         />
        <FormInput
         type="password"
         name="password"
         handleChange={this.handleChange}
         value={this.state.password}
         label="password"
         />
         <CustomButton type="submit">Sign In</CustomButton>
      </form>

    </div>;
	}
}

export default SignIn;
