import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp"><LoginComponent /></div>
        )
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'User',
            password: 'abc'
        }

        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)

    }

    handleUsernameChange(event) {
        console.log(event.target.value)
        this.setState = (
            {
                username: event.target.value
            }
        )
    }

    handlePasswordChange(event) {
        this.setState = (
            {
                password: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" ref={this.state.username} onChange={this.handleUsernameChange} defaultValue=""></input>
                Password: <input type="password" name="password" ref={this.state.password} onChange={this.handlePasswordChange} defaultValue=""></input>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;