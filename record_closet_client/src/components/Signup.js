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

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render(){
    return (
      <div>
        Sign Up:
        <form className= "signup-form" onSubmit={this.handleSubmit} >
          <input name='username' type="text" value={this.state.username} onChange={this.handleChange} placeholder="username"/>
        <br/>
          <input name='password' type="password" value={this.state.password} onChange={this.handleChange} placeholder="password"/>
        <br/>
        <input type="submit" value="Sign Up"/>
        <br/>
        </form>

      </div>
    );
  }
}