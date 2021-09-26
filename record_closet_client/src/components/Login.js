import React, { Component } from 'react'
import "../App.css"
import { connect } from 'react-redux'
import { UsersActions } from '../actions/UsersActions'


class Login extends Component {
  constructor(props){
    super(props)

    this.props.logout()

    this.state = {
      username: "",
      password:"",
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  handleChange(e){
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit(e){
    e.preventDefault()

    this.setState({submitted: true})
    const { username, password } = this.state
    if (username && password) {
      this.props.login(username, password)
    }
  }

  render(){
    const { loggedIn } = this.props
    const { username, password, submitted } = this.state
    return (
      <form className= "login-form" onSubmit= {this.handleSubmit}>

      </form>
    )
  
  }
}

export default Login