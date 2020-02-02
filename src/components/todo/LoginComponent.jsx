import React, { Component } from 'react'

import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'User',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    loginClicked() {

        if (this.state.username === 'aaa' && this.state.password === 'bbb') {
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
        } else {
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }


    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {this.state.hasLoginFailed && <div className="alert alert-warning"> Invalid Credentials </div>}
                    {this.state.showSuccessMessage && <div> Login Successfull </div>}
                    User Name: <input type="text" name="username" ref={this.state.username} onChange={this.handleChange} defaultValue=""></input>
                    Password: <input type="password" name="password" ref={this.state.password} onChange={this.handleChange} defaultValue=""></input>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </div>
        )
    }
}

export default LoginComponent;