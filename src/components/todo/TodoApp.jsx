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
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        console.log(this.state)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                User Name: <input type="text" name="username" ref={this.state.username} onChange={this.handleChange} defaultValue=""></input>
                Password: <input type="password" name="password" ref={this.state.password} onChange={this.handleChange} defaultValue=""></input>
                <button>Login</button>
            </div>
        )
    }
}

export default TodoApp;