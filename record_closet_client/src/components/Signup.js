import React, { Component } from 'react'
import "../App.css"

export default class Signup extends Component {
 
    state = {
      username: '',
      password: '',
      
    }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  // handleSubmit = e => {

  // }

  render(){
    return (
      <div>
        Sign Up:
        <form className= "signup-form">
          <input name='username' type="text" value={this.state.username} onChange={this.handleChange} onSubmit={this.handleSubmit} placeholder="username"/>
        <br/>
          <input name='password' type="password" value={this.state.password} onChange={this.handleChange} onSubmit={this.handleSubmit} placeholder="password"/>
        <br/>
        <input type="submit" value="Sign Up"/>
        <br/>
        </form>

      </div>
    );
  }
}