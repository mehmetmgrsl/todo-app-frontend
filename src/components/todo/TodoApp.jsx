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
            console.log('Successfull')
            this.setState({ showSuccessMessage: true })
            this.setState({ hasLoginFailed: false })
        } else {
            console.log('Failed')
            this.setState({ showSuccessMessage: false })
            this.setState({ hasLoginFailed: true })
        }


    }

    render() {
        return (
            <div>
                <ShowInvalidCredential hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccessful showSuccessMessage={this.state.showSuccessMessage} />
                User Name: <input type="text" name="username" ref={this.state.username} onChange={this.handleChange} defaultValue=""></input>
                Password: <input type="password" name="password" ref={this.state.password} onChange={this.handleChange} defaultValue=""></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function ShowInvalidCredential(props) {

    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>
    }

    return null
}

function ShowLoginSuccessful(props) {

    if (props.showSuccessMessage) {
        return <div>Login Succesfull</div>
    }

    return null
}

export default TodoApp;